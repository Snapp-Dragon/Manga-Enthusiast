import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

//state

const initialState = {
  //if the token is there, get it from local storage
  token: localStorage.getItem("token"),

  //set if the user is authenticated
  isAuthenticated: null,

  //set wheaher loading is true
  loading: true,

  //set user
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      //get the token that was returned and store it in local storage
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
