import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    bio: "",
    hobbies: "",
    mangas: "",
    location: "",
    youtube: "",
    twitter: "",
    facebook: "",
    instagram: "",
  });

  const {
    bio,
    mangas,
    location,
    youtube,
    twitter,
    facebook,
    instagram,
  } = formData;

  // change the state
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //Submit the form

  const onSubmit = () => {};

  return (
    <div className="log-profile">
      <div>
        <h4>
          <span className="text-primary">Tell Us</span> About Yourself
        </h4>
        <p>
          <i className=" small material-icons prefix">person</i> Create Your
          Profile
        </p>
      </div>
      <div className="row">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">library_books</i>
              <input
                id="mangas"
                name="mangas"
                type="text"
                className="validate"
                value={mangas}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="mangas">Mangas You have read</label>
              <span
                className="helper-text"
                data-error="Please enter mangas you have read"
                data-success="success"
              ></span>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">language</i>
              <input
                id="location"
                name="location"
                type="text"
                className="validate"
                value={location}
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="location">City, State, Country</label>
              <span
                className="helper-text"
                data-error="Please enter your location"
                data-success="success"
              ></span>
            </div>
          </div>

          {/* bio */}
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <textarea
                    id="bio"
                    name="bio"
                    className="materialize-textarea"
                    onChange={(e) => onChange(e)}
                    value={bio}
                  ></textarea>
                  <label for="textarea1">Tell us about Yourself</label>
                </div>
              </div>
            </form>
          </div>
          {/* social media icons */}

          {/*   Youtube          */}
          <div className="row">
            <div className="input-field col s12">
              <i class="fab fa-youtube prefix"></i>
              <input
                id="youtube"
                name="youtube"
                type="text"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="location">YouTube URL</label>
            </div>
          </div>

          {/*   twitter       */}
          <div className="row">
            <div className="input-field col s12">
              <i class="fab fa-twitter prefix"></i>
              <input
                id="twitter"
                name="twitter"
                type="text"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="location">Twitter URL</label>
            </div>
          </div>
          {/*   facebook          */}
          <div className="row">
            <div className="input-field col s12">
              <i class="fa fa-facebook fa-fw prefix"></i>
              <input
                id="facebook"
                name="facebook"
                type="text"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="location">Facebook URL</label>
            </div>
          </div>

          {/*   Instagram         */}
          <div className="row">
            <div className="input-field col s12">
              <i class="fab fa-instagram prefix"></i>
              <input
                id="instagram"
                name="instagram"
                type="text"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="location">Instagram URL</label>
            </div>
          </div>

          <a
            href="!#"
            className="btn-dark my-1 waves-effect waves-light btn"
            onClick={(e) => onSubmit(e)}
          >
            <i className="material-icons left">keyboard_hide</i>Create
          </a>

          {/* <p>
            Already Have an account?{" "}
            <Link to="/login">
              <span className="text-primary">Sign In</span>
            </Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
