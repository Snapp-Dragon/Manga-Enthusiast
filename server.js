//Bring in express
const express = require("express");

//Create an instance of express
const app = express();

//middleware to allow us to use raw data
app.use(express.json({ extended: false }));

//Build a test route
app.get("/", (req, res) => {
  res.send("You hit this route");
});

//Define Routes for API
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/auth", require("./routes/api/auth"));

//Define a port
const PORT = process.env.PORT || 5000;

//Set express to listen on port
app.listen(PORT, () => {
  console.log(`server started on port ${[PORT]}`);
});
