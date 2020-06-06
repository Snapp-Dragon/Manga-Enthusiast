/*
    Mongoose is a javascript library that allos you to define the schema of your database.
    Once a schema is defined mongoose lets you create a model based on a specific schema. A 
    mongoose model is then mapped to a MongoDB document via the definition schema.

*/

/*

        to do
        1.bringn in mongoose
        2.create schema
        3.export the mongoose model

*/

const mongoose = require("mongoose");

const UserSchema = new mongoose({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
