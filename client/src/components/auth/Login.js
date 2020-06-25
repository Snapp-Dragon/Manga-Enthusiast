import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //state for login

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="log-reg">
      <div>
        <h4>
          <span className="text-primary">Log</span> in
        </h4>
        <p>
          <i className=" small material-icons prefix">person</i> Log in to Your
          Account
        </p>
      </div>
      <div className="row">
        <form className="col s6">
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

          <a
            href="!#"
            className="btn-dark my-1 waves-effect waves-light btn"
            onClick={(e) => onSubmit(e)}
          >
            <i className="material-icons left">keyboard_hide</i>Register
          </a>

          <p>
            Dont Have an account?{" "}
            <Link to="/login">
              <span className="text-primary">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
