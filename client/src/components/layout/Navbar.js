import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";
import { Link } from "react-router-dom";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  //create variabes that will store links visible to the guests and members
  const authLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">



     <li>
        <Link
          to="/profiles"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="View Memebers"
        >
           <i className="material-icons left landing-btn">people</i>
          Members
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="View Dashboard"
        >
          <i className="material-icons left landing-btn">account_box</i>
          Dashboard
        </Link>
      </li>
      <li>
        <a
          onClick={logout}
          href="#!"
          to="/enthusiasts"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Meet Manga Lovers"
        >
          <i className="material-icons left landing-btn">logout</i>
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
   <li>
        <Link
          to="/profiles"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="View Memebers"
        >
            <i className="material-icons left landing-btn">people</i>
          Members
        </Link>
      </li>

      <li>
        <Link
          to="/login"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Log in to your account"
        >
          <i className="material-icons left landing-btn">login</i>
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Create an account"
        >
          <i className="material-icons left landing-btn">keyboard_hide</i>
          Register
        </Link>
      </li>
     
    </ul>
  );

  const mobileGuest = (
    <ul className="sidenav black" id="mobile-demo">

<li>
        <Link
          to="/profiles"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="View Memebers"
        >
           <i className="material-icons left landing-btn">people</i>
          Members
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Log in to your account"
        >
          <i className="white-text material-icons left landing-btn">login</i>
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Create an account"
        >
          <i className="white-text material-icons left landing-btn">
            keyboard_hide
          </i>
          Register
        </Link>
      </li>
      
    </ul>
  );

  const mobileAuth = (
    <ul className="sidenav black text-white" id="mobile-demo">

<li>
        <Link
          to="/profiles"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="View Memebers"
        >
            <i className="material-icons left landing-btn">people</i>
          Members
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="View Dashboard"
        >
          <i className="material-icons left landing-btn">account_box</i>
          Dashboard
        </Link>
      </li>
      <li>
        <a
          onClick={logout}
          href="#!"
          to="/enthusiasts"
          className="tooltipped"
          data-position="bottom"
          data-tooltip="Meet Manga Lovers"
        >
          <i className="material-icons left landing-btn">logout</i>
          Logout
        </a>
      </li>
    </ul>
  );
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="grey  darken-4 navbar-fixed">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                <a
                  href="#"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
                <i className="large material-icons">tv</i>
                <span className="text-primary">Anime</span>{" "}
                <span className="small">Enthusiasts</span>
              </Link>
            </div>
          </div>

          {/* if not loading and authenticated show authlinks else guest links */}
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </nav>
      </div>

      {!loading && isAuthenticated ? mobileAuth : mobileGuest}
    </div>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});
export default connect(mapStateToProps, { logout })(Navbar);
