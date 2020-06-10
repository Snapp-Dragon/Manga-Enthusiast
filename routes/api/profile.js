const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const request = require("request");
const config = require("config");
const { check, validationResult } = require("express-validator");

//@ Route api/profile/me
//@ Desc get current users profile
//@ Access Privale
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    //if there is no profile

    if (!profile) {
      return res.status(404).json({ msg: "profile was not found" });
    }

    res.json({ profile });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//@ Route Post api/profile
//@ Desc create pr update user profile
//@ Access Prive

router.post(
  "/",
  [
    auth,
    [
      check("hobbies", "Please tell us more about your hobbies")
        .not()
        .isEmpty(),
      check("mangas", "Please tell us about the mangas you have read")
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    //check validation result for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    //else pull everything from the profile form

    const {
      bio,
      mangas,
      hobbies,
      location,
      youtube,
      twitter,
      facebook,
      instagram,
    } = req.body;

    //build the profile object

    const profileFields = {};

    profileFields.user = req.user.id;
    if (bio) profileFields.bio = bio;
    if (location) profileFields.location = location;
    if (hobbies) {
      profileFields.hobbies = hobbies.split(",").map((hobby) => hobby.trim());
    }
    if (mangas) {
      /*
        split method splits the string into substrings based on the commas'
        trim method removes all of the white spaces
      */
      profileFields.mangas = mangas.split(",").map((manga) => manga.trim());
    }

    console.log(profileFields);

    //build the social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;

    //Create or update the profile
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      //if a profile is found update it
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      // if there is no profile create one

      profile = new Profile(profileFields);

      //save profile to database
      await profile.save();

      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
