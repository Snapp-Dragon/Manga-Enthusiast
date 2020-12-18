import React, { useState, useEffect } from "react";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import { connect } from "react-redux";
//withRouter allows us to redirect from an action
import { Link, withRouter } from "react-router-dom";


import PropTypes from "prop-types";

const EditProfile = ({
  createProfile,
  getCurrentProfile,
  history,
  profile: { profile, loading },
}) => {
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
    hobbies,
    mangas,
    location,
    youtube,
    twitter,
    facebook,
    instagram,
  } = formData;


  useEffect(() => {
    getCurrentProfile();

    setFormData({
      location: loading || !profile.profile.location ? "" : profile.profile.location,
      hobbies: loading || !profile.profile.hobbies ? "" : profile.profile.hobbies,
      mangas: loading || !profile.profile.mangas ? "" : profile.profile.mangas,
      bio: loading || !profile.profile.bio ? "" : profile.profile.bio,
      twitter: loading || !profile.profile.social ? "" : profile.profile.social.twitter,
      facebook: loading || !profile.profile.social ? "" : profile.profile.social.facebook,
      linkedin: loading || !profile.profile.social ? "" : profile.profile.social.linkedin,
      youtube: loading || !profile.profile.social ? "" : profile.profile.social.youtube,
      instagram: loading || !profile.profile.social ? "" : profile.profile.social.instagram,
    });
  }, [getCurrentProfile, loading]);

 
 
  // change the state
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Submit the form

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history,true);
  };

  
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
        <form className="col s6" onSubmit={(e)=>onSubmit(e)}>
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
              <label className="active" htmlFor="location">
                City, State, Country
              </label>
              <span
                className="helper-text"
                data-error="Please enter your location"
                data-success="success"
              ></span>
            </div>
          </div>

          {/* Mangas */}
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

          {/* Hobbies */}
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">library_books</i>
              <input
                id="hobbies"
                name="hobbies"
                type="text"
                className="validate"
                value={hobbies}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="mangas">Any Hobbies</label>
              <span
                className="helper-text"
                data-error="Please enter mangas you have read"
                data-success="success"
              ></span>
            </div>
          </div>

          {/* bio */}
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="bio"
                    name="bio"
                    className="materialize-textarea"
                    onChange={(e) => onChange(e)}
                    value={bio}
                  ></textarea>
                  <label htmlFor="bio">Tell us about Yourself</label>
                </div>
              </div>
            </div>
          </div>
          {/* social media icons */}

          {/*   Youtube          */}
          <div className="row">
            <div className="input-field col s12">
              <i className="fab fa-youtube prefix"></i>
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
              <i className="fab fa-twitter prefix"></i>
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
              <i className="fa fa-facebook fa-fw prefix"></i>
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
              <i className="fab fa-instagram prefix"></i>
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

          {/* <a
            href="!#"
            className="btn-dark my-1 waves-effect waves-light btn"
            onClick={(e) => onSubmit(e)}
          >
            <i className="material-icons left">keyboard_hide</i>Edit
          </a> */}
          <input type="submit"  value = "Subtmit" className ="btn-dark my-1 waves-effect waves-light btn" />
        </form>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile)
);
