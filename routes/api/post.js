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

//Route Get api/post
//Desc  Get all posts
//@Access Private

router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });

    res.json(posts);
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Server Error");
  }
});

//@ Route  GET api/post/:post_id
//@ Desc get post by id
//@ Access Private

router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check to see if there is a post by that id

    if (!post) {
      res.status(404).json({ msg: "Post not found!" });
    }

    res.json(post);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Not Found" });
    }

    res.status(500).send("Server Error");
  }
});

//@ Route  Delete api/post/:id
//@ Desc   Delete a post
//@ Access Private

router.delete("/:id", auth, async (req, res) => {
  try {
    // get the post to be deleted

    const post = await Post.findById(req.params.id);

    //check to see if there is a post

    if (!post) {
      res.status(404).json({ msg: "Post not found!" });
    }

    //check to see if the user owns the post

    if (post.user.toString() !== req.user.id) {
      res.status(401).json({ msg: "Not authorized!" });
    }

    await post.remove();

    res.json({ msg: "Post Deleted" });
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Server Error");
  }
});

//@ route  Put api/post/like/:id
//@ Desc   Like a post
//@ Access Private

router.put("/like/:id", auth, async (req, res) => {
  try {
    //get the post to like
    const post = await Post.findById(req.params.id);

    //check to see if the post has already been liked
    if (
      // if the array retuned has a length that is greater than zero then you already
      // liked this post
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(404).json({ msg: "Post Alread Liked" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Server Error");
  }
});

//@ Route Put api/post/unlike/:id
//@ Desc unlike a post
//@ Access private

router.put("/unlike/:id", auth, async (req, res) => {
  try {
    //get the post to unlike
    const post = await Post.findById(req.params.id);

    //check to see if the post is liked

    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      res.status(404).json({ msg: "This post has not been liked" });
    }

    //get the index of the post

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Server Error");
  }
});

//@ Route POST api/post/comment/:id
//@ desc Comment on a post
//@ Access Private

router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    //check to see if there are errors

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    try {
      //get the user that is making the comment
      const user = await User.findById(req.user.id).select("-password");

      //get post to comment on
      const post = await Post.findById(req.params.id);

      //build a new comment

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      //add the comment to the post
      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (error) {
      console.error(error.message);

      res.status(500).send("Server Error");
    }
  }
);

//@ Route POST api/post/comment/:id/:comment_id
//@ desc DELETE comment
//@ Access Private

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    // get the post
    const post = await Post.findById(req.params.id);

    // pull comment from post
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    //make sure the comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Not Found" });
    }

    //find the index of the comment in the array to be delted
    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);

    //check user
    if (comments.user.toString !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
  } catch (error) {}
});
module.exports = router;
