const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const gravatar = require("gravatar");

const config = require("config");

const bcrypt = require("bcryptjs");

const User = require("../../models/User");

const { check, validationResult } = require("express-validator");

// @Route /api/users
// @Desc Register a user
// @access Public

router.post(
  "/",
  [
    check("name", "Please eneter a name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password must be at least 7 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // 1.check for errors in the validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //display the array of errors
      res.status(400).json({ errors: errors.array() });
    }

    // Destructure name, email ,password from the request object
    const { name, email, password } = req.body;

    try {
      //check to see if the user already exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Bad Request, User Already exists" }] });
      }

      //Get The users gravitar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      //create the instance of a user

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      //encrypt the users password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      //save user to the database

      await user.save();

      //create payload for token

      const payload = {
        user: {
          id: user.id,
        },
      };

      //sign the token

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;

          //return thr token
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);

      res.status(500).send("Server Error");
    }
  }
);

//export the module
module.exports = router;
