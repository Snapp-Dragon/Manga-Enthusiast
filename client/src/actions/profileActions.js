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


//@Action Get all profiles
export const getProfiles = ()=> async dispatch =>{


  dispatch({type: CLEAR_PROFILE});

  try {

    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    })


    
  } catch (error) {

    dispatch({
      type: PROFILE_ERROR,
      payload: {

        msg: error.response.statusText,
        status: error.reponse.status
      }
    })
    
  }
}


//@Action get user profile by userId

export const getProfileById = userId => async dispatch =>{

  try {

 
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({

      type: GET_PROFILE,
      payload: res.data,
    })
    
  } catch (error) {

  
    dispatch({
      type: PROFILE_ERROR,
      payload: {

        msg: error.response.statusText,
        status: error.response.status
      }
    })
    
  }
}

//@Action create or update profile
/* 
  using history object to redirect
  using edit paramater to check if its editing or creating a profile
*/
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    //create config object to send data

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //make request

    const res = await axios.post("/api/profile", formData, config);

    //send respose to reducer

    dispatch({ type: GET_PROFILE, payload: res.data });

    M.toast({ html: "Profile Edited", classes: "green" });
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      dispatch({ type: PROFILE_ERROR });
      errors.forEach((error) => {
        M.toast({ html: `${error.msg}`, classes: "red" });
      });
    }

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
