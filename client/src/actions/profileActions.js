import {
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILE,
  PROFILE_ERROR,
} from "./types";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";

//@ Action - Get Current users profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,

        // http status
        status: error.response.staus,
      },
    });
  }
};
