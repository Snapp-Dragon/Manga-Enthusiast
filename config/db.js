//Connect to the database

const mongoose = require("mongoose");

const config = require("config");

const dbURI = config.get("mongoURI");

//connect to the database

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.info("Success, MongoDB has connected");
  } catch (error) {
    console.error(error.message);

    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
