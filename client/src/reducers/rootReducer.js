import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";
import postReducer from '../reducers/postReducer';

export default combineReducers({
  authReducer,
  profileReducer,
  postReducer
});
