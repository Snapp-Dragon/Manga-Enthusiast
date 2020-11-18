import axios from 'axios';
import {GET_POSTS,POST_ERROR} from '../actions/types';


//@Action get posts from database

export const getPosts = ()=> async (dispatch)=>{


    try {
        //make call to database
        const res = await axios.get("/api/post");


        //send results to the reducer
        dispatch({

            type: GET_POSTS,
            payload: res.data
        })
        
    } catch (error) {


        //dispatch error to the reducer
        dispatch({
            type: POST_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
        
    }


}