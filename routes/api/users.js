//bring in express
const express = require("express");

//build router
const router = express.Router();

//build endpoint

router.get("/", (req, res) => {
  res.send("You hit users end point");
});

//export the module
module.exports = router;
