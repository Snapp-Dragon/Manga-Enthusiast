import {GET_POSTS,POST_ERROR} from "../actions/types"


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