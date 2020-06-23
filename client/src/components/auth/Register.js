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
  return (
    <div>
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
        <form className="col s12">
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
              />
              <label htmlFor="name">Name</label>
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
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="email">Email</label>
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
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="password">Password</label>
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
                value={password2}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="password2">Re-enter Password</label>
            </div>
          </div>
          <a className="btn-dark my-1 waves-effect waves-light btn">
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
