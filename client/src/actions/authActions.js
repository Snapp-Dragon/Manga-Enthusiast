import axios from "axios";

import setAuthToken from "../util/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_FAIL,
  LOGOUT,
} from "../actions/types";
import M from "materialize-css/dist/js/materialize.min.js";

//@Action - Load user
export const loadUser = () => async (dispatch) => {
  //if there is a token in local storage send it as a global header
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("api/auth");

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_FAIL });
  }
};

//@ Action - Register user

export const registerUser = ({ name, email, password }) => async (dispatch) => {
  //Build config object
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Build body
  const body = JSON.stringify({ name, email, password });

  //make request
  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());
    M.toast({ html: "Registration Successful", classes: "green" });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) =>
        M.toast({ html: `${error.msg}`, classes: "red" })
      );
    }
  }
};

//@ Action - Log in user

export const login = ({ email, password }) => async (dispatch) => {
  //Prepare header

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //prepare the body
  const body = JSON.stringify({ email, password });

  //make the request

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    M.toast({ html: "Login Successful", classes: "green" });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      dispatch({ type: LOGIN_FAIL });
      errors.forEach((error) => {
        M.toast({ html: `${error.msg}`, classes: "red" });
      });
    }
  }
};

//@ Action - log out a user / clear profile

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  M.toast({ html: "Logged out", classes: "green" });
};
