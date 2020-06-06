const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

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
  (req, res) => {
    // 1.check for errors in the validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //display the array of errors
      res.status(400).json({ errors: errors.array() });
    }

    const user = req.body;
    res.send(user);
  }
);

//export the module
module.exports = router;
