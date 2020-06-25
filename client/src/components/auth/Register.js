import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  // change the state
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.error("The passwords do not match");
    } else {
      console.log("success");
    }
  };

  return (
    <div className="log-log">
      <div>
        <h4>
          <span className="text-primary">Join</span> The Community
        </h4>
        <p>
          <i className=" small material-icons prefix">person</i> Create Your
          Account
        </p>
      </div>
      <div className="row">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="name"
                name="name"
                type="text"
                className="validate"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="name">Name</label>
              <span
                className="helper-text"
                data-error="Please enter your name"
                data-success="success"
              ></span>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                name="email"
                type="email"
                className="validate"
                value={email}
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="Please enter valid email"
                data-success="success"
              ></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">https</i>
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
                value={password}
                minLength="7"
                required
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="password">Password</label>
              <span
                className="helper-text"
                data-error="password must be 6 characters long"
                data-success="success"
              ></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">https</i>
              <input
                id="password2"
                type="password"
                name="password2"
                className="validate"
                required
                value={password2}
                re
                onChange={(e) => onChange(e)}
                minLength="7"
              />
              <label htmlFor="password2">Re-enter Password</label>
              <span
                className="helper-text"
                data-error="password must be 6 characters long"
                data-success="success"
              ></span>
            </div>
          </div>
          <a
            href="!#"
            className="btn-dark my-1 waves-effect waves-light btn"
            onClick={(e) => onSubmit(e)}
          >
            <i className="material-icons left">keyboard_hide</i>Register
          </a>

          <p>
            Already Have an account?{" "}
            <Link to="/login">
              <span className="text-primary">Sign In</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
