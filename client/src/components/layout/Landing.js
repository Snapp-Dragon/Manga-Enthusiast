import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="content">
        <h1>
          <span className="text-primary">Welcome</span> To Anime Enthusiats
        </h1>
        <p className="my-2">Discover and discuss your favorite anime</p>
        <Link to="/register" class="my-2 btn-dark waves-effect waves-light btn">
          <i class="material-icons left landing-btn">keyboard_hide</i>Register
        </Link>

        <Link to="/login" class="btn-dark waves-effect waves-light btn">
          <i class="material-icons left landing-btn">login</i>Login
        </Link>
      </div>
    </section>
  );
};

Landing.propType = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
