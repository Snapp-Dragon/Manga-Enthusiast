const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You hit the profile end point");
});

module.exports = router;
