import React,{Fragment,useEffect} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/postActions';
import PostItem from '../posts/PostItem';
import PostForm from '../posts/PostForm';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { GET_PROFILE } from '../../actions/types';



const Posts = ({getPosts, posts:{posts,loading}})=>{


    useEffect(()=>{

        getPosts();
        
    },[getPosts])


    return(
        loading ? <Spinner/> : <Fragment>

        <h1>Posts</h1>
       <p className="lead"> <i className="material-icons">group</i> Join The Fandom</p>
       {/* Post Form */}
       <PostForm/>


       <div className="posts">
           {posts.map((post)=>(


            //prop name must match name of prop to destructure in the post item component
    
               <PostItem key ={post._id} post ={post}/>

           ))}
       </div>

        </Fragment>
    )
}

Posts.propTypes = {

    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
   


}

const mapStateToProps = (state)=>({

    posts: state.postReducer,
   
});

export default connect(mapStateToProps,{getPosts}) (Posts)
