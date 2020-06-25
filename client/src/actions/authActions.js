import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";
import M from "materialize-css/dist/js/materialize.min.js";

//@ Action - Register a user

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
