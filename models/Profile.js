/*
        Every user should have a profile

*/

const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "user",
  },

  bio: {
    type: String,
  },

  hobbies: {
    type: [String],
    required: true,
  },

  mangas: {
    type: [String],
    required: true,
  },

  location: {
    type: [String],
  },

  social: {
    youtube: {
      type: String,
    },

    twitter: {
      type: String,
    },

    facebook: {
      type: String,
    },

    instagram: {
      type: String,
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
