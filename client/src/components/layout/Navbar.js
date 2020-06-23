import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="grey darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <i className="large material-icons">tv</i>
              <span className="text-primary">Anime</span> Enthusiasts
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
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
                  <i className="material-icons left landing-btn">
                    keyboard_hide
                  </i>
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/enthusiasts"
                  className="tooltipped"
                  data-position="bottom"
                  data-tooltip="Meet Manga Lovers"
                >
                  <i className="material-icons left landing-btn">people</i>
                  Enthusiasts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
