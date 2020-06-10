const express = require("express");

const User = require("../../models/User");

const jwt = require("jsonwebtoken");

const config = require("config");

const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");

const router = express.Router();

//@ Route api/auth
//@ Desc Log in user Route
//@ access Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@ Route api/auth
//@ Desc authenticate user and return a token
//@ Access public

router.post(
  "/",
  [
    check("email", "Provide a valid email please.").isEmail(),
    check("password", "Please provide the correct password.").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure email and password from from req
    const { email, password } = req.body;

    try {
      //see of the user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //if there is a user match the user email and password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //return the token with that users information

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
