import axios from 'axios';
import M from "materialize-css/dist/js/materialize.min.js";
import {GET_POSTS,GET_POST,POST_ERROR,UPDATE_LIKES,DELETE_POST,ADD_POST, ADD_COMMENT,REMOVE_COMMENT} from '../actions/types';


//@Action Get posts from database

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


//@Action get single post from the database


export const getPost = (id)=> async (dispatch)=>{


    try {

        const res = await axios.get(`/api/post/${id}`);

        dispatch({

            type: GET_POST,
            payload: res.data
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

//@Action Update likes Add
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


//@Action Update likes Remove


export const removeLikes = (id)=> async (dispatch)=>{

    try {
        
        const res = await axios.put(`/api/post/unlike/${id}`);

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

//@Action Delete Post

export const deletePost = (id)=> async (dispatch)=>{


    try {

        const res = await axios.delete(`/api/post/${id}`);

        dispatch({

            type: DELETE_POST,
            payload: id
        })

        M.toast({ html: "Post Deleted", classes: "green" });
        
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

//@Action add comment


export const addComment = (postId,formData)=> async (dispatch)=>{


    const config = {

        'Content-Type': 'application/json'
    }


    try {


        const res = await axios.post(`/api/post/comment/${postId}`,formData,config);


        dispatch({

            type: ADD_COMMENT,
            payload: res.data
        })

    
        M.toast({html: 'Comment added', classes:"green"});
    } catch (error) {

        dispatch({

            type: POST_ERROR,
            payload: {

                msg: error.response.statusText,
                status: error.resonse.status,
            }
        })
        
    }



}


//@Action delete comment

export const deleteComment = (postId,commentId)=> async (dispatch)=>{


    try {

      
        await axios.delete(`/api/post/comment/${postId}/${commentId}`);

        dispatch({

            type: REMOVE_COMMENT,
            payload: commentId
        })

        M.toast({html: "Comment removed", classes: "green"});
        
    } catch (error) {

        dispatch({

            type: REMOVE_COMMENT
        })
        
    }

}


export const addPost = (formData)=> async (dispatch)=>{


    const config = {

        headers:{
            'Content-Type': 'application/json'
        }
    }

    try {

    
        const res = await axios.post('/api/post',formData,config);

        dispatch({

            type: ADD_POST,
            payload: res.data
        })
        
        M.toast({html: "Post Created", classes: "green"});
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
