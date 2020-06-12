const express = require("express");

const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");

const Post = require("../../models/Post");

const Profile = require("../../models/Profile");

const User = require("../../models/User");

const router = express.Router();

//@Route - api/post
//@Desc - Create a post
//@Access - Private

router.post(
  "/",
  [auth, [check("text", "Please enter a message").not().isEmpty()]],
  async (req, res) => {
    //check for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //get current user
      const user = await User.findById(req.user.id).select("-password");

      //build new post

      const newPost = Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (error) {
      console.error(error.message);

      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
