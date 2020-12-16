import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getPost} from '../../actions/postActions';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from  '../post/CommentItem';
import {Link} from 'react-router-dom';



const Post = ({post:{post,loading},getPost,match})=>{


    useEffect(()=>{

        // we will get the post id from the url
        getPost(match.params.id);
    },[getPost])


    return(


        loading || post === null ? <Spinner/> : 
        <fragment>
            <Link to= "/posts" className="btn btn-primary">Back to Posts</Link>
            <PostItem post ={post} showActions={false} />
            <CommentForm postId ={post._id}/>
            <div className="comments">
               {post.comments.map(comment =>  <CommentItem key={comment._id} comment={comment} postId={post._id}/>)}
            </div>
        </fragment>
    )



}


Post.propTypes = {

    post: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired,


}

const mapStateToProps = state =>({

    post: state.postReducer
})

export default connect(mapStateToProps,{getPost}) (Post)