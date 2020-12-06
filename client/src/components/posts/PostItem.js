import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {addLikes,removeLikes} from '../../actions/postActions';


const PostItem = ({auth, post:{_id,text,name,avatar,user,likes,comments,date } ,addLikes,removeLikes}) => {
    return (
        <div className="post bg-coral py-1 my-1">
        <div className = "post-image">
          <Link  to={`/profile/${user}`}>
            <img
              className="round-img"
              src={avatar}
              alt=""
            />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">
            {text}
          </p>
           <p className="post-date">
    Posted on <Moment format ="YYYY/MM/DD">{date}</Moment>
          </p>
          <button onClick = {e => addLikes(_id)}type="button" className="btn btn-blanched">
            <i className="large material-icons">thumb_up</i>
    <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button onClick ={e => removeLikes(_id)} type="button" className="btn btn-blanched">
            <i className="material-icons">thumb_down</i>
          </button>
          <Link to={`/post/${_id}`} className="btn btn-black">
    Discussion <span className='comment-count'>{comments.length}</span>
          </Link>

          {/* Show loading button only if this is the users post */}
          {!auth.loading && user === auth.user._id &&(
               <button      
               type="button"
               className="btn btn-danger"
             >
               <i className="material-icons">close</i>
             </button>


          )}
         
        </div>
      </div>
    )
}

PostItem.propTypes = {

    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state=>({
 
    // we need to be able to verify who owns the post
    auth:  state.authReducer
})

export default connect(mapStateToProps,{addLikes,removeLikes}) (PostItem)
