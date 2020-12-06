import {GET_POSTS,POST_ERROR,UPDATE_LIKES} from "../actions/types"


//initial state of posts

const initialState = {

    posts: [],
    post: null,
    loading: true,
    error: {}
}


//action stores the type and payload
export default function(state = initialState, action){

    //destructure type and payload from action

    const {type,payload} = action;

    switch(type){

        case GET_POSTS: 

        return {

            ...state,
            posts: payload,
            loading: false,
        };


        case UPDATE_LIKES:

            return{

                ...state,
                posts: state.posts.map((post)=> post._id === payload.id ? {...post, likes: payload.likes } : post),
                loading: false

            }
        //create  update likes case
            // 1. map through the posts
            // 2. check to see if the post database id matches the payload id
            // 3. if there is a match set the post likes to the payload likes otherwise return the posts
        

        case POST_ERROR:
           
        return {

            ...state,
            erorr: payload,
            loading: false
        }

        default:
            return state;
    }



}