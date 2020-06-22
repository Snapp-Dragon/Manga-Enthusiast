import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="content">
        <h1>
          <span className="text-primary">Welcome</span> To Anime Enthusiats
        </h1>
        <p className="xs-2">Discover and discuss your favorite anime</p>
        <a class=" orange darken-2 waves-effect waves-light btn">
          <i class="material-icons left">keyboard_hide</i>Register
        </a>

        <a class=" orange darken-2 waves-effect waves-light btn">
          <i class="material-icons left">login</i>Login
        </a>
        {/* <a href="!#" className=" orange darken-2 waves-effect waves-light btn">
          <i class="material-icons">login</i>
          Login
        </a> */}
      </div>
    </section>
  );
};

export default Landing;
