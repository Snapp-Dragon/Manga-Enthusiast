import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="content">
        <h1>
          <span className="text-primary">Welcome</span> To Anime Enthusiats
        </h1>
        <p className="my-2">Discover and discuss your favorite anime</p>
        <Link
          to="/register"
          class="my-2 orange darken-2 waves-effect waves-light btn"
        >
          <i class="material-icons left landing-btn">keyboard_hide</i>Register
        </Link>

        <Link to="/login" class=" btn-dark waves-effect waves-light btn">
          <i class="material-icons left landing-btn">login</i>Login
        </Link>
      </div>
    </section>
  );
};

export default Landing;
