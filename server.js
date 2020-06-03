//Bring in express
const express = require("express");

//Create an instance of express
const app = express();

//Build a test route
app.get("/", (req, res) => {
  res.send("You hit this route");
});

//Define a port
const PORT = process.env.PORT || 5000;

//Set express to listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
