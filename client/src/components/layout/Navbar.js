import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="grey darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <a href="!#" className="brand-logo">
              <i class="large material-icons">tv</i>
              <span className="text-primary">Anime</span> Enthusiasts
            </a>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a
                  href="!#"
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Log in to your account"
                >
                  <i class="material-icons left landing-btn">login</i>
                  Login
                </a>
              </li>
              <li>
                <a
                  href="!#"
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Create an account"
                >
                  <i class="material-icons left landing-btn">keyboard_hide</i>
                  Register
                </a>
              </li>
              <li>
                <a
                  href="!#"
                  class="tooltipped"
                  data-position="bottom"
                  data-tooltip="Meet Manga Lovers"
                >
                  <i class="material-icons left landing-btn">people</i>
                  Enthusiasts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
