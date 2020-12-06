import axios from 'axios';
import {GET_POSTS,POST_ERROR,UPDATE_LIKES} from '../actions/types';


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

//@Action update likes Add
export const addLikes = (id)=> async (dispatch)=>{


    try {

        //add a like 
        const res = await axios.put(`/api/post/like/${id}`);

        dispatch({

            type: UPDATE_LIKES,
            payload: {
                id,
                likes: res.data
            }
         
        })
        
    } catch (error) {

        dispatch({

            type: POST_ERROR,
            payload: {

                msg: error.response.statusText,
                status: error.response.status
            }


        })
        
    }


}


//@Action update likes Remove


export const removeLikes = (id)=> async (dispatch)=>{

    try {
        
        const res = axios.put(`/api/post/unlike/${id}`);

        dispatch({

            type:  UPDATE_LIKES,
            payload: {

                id,
                likes: res.data
            }
        })
    } catch (error) {

        dispatch({

            type: POST_ERROR,
            payload: {

                msg: error.response.statusText,
                status: error.response.status
            }
        })
        
    }


}