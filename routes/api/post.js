const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You hit the post end point");
});

module.exports = router;
