import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import DashboardActions from "./DashboardActions";
import Spinner from "../layout/Spinner";
import Hobby from './Hobby';
import Mangas from './Manga';
import Social from './Social';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>
        <span className="text-primary">Dash</span>board
      </h1>
      <p className="lead">
        <i className="small material-icons">person</i> Welcome{" "}
        {user && user.name}
      
       
      </p>
      {/* Check to see if the user has a profile */}
      {profile !== null ? (
        <Fragment>
          <DashboardActions />

          <Hobby hobbies={profile.hobbies}/>
          <Mangas mangas={profile.mangas}/>  

          {/* add send social object if there is no social object send an empty object */}
          <Social social={profile.social || {}}/>
          <div>
            
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <p className="lead">
            Oops, it looks like you havent created a profle yet!
          </p>
          <Link
            to="/create-profile"
            className="btn-dark waves-effect waves-light btn"
          >
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  profile: state.profileReducer,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
