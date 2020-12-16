import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {addComment} from '../../actions/postActions';
import {connect} from 'react-redux';


const CommentForm = ({addComment,postId})=>{


    const [text, setText] = useState('');


    return(

        <div class="row">
    <form class="col s12" onSubmit={ e=>{

        e.preventDefault();
        addComment(postId,{text});
        setText('');
       

    }}>
      <div class="row">
        <div class="input-field col s12">
          <textarea id={text} class="materialize-textarea" onChange = {e=> setText(e.target.value)} value={text} required ></textarea>
          <label for="textarea1">Add A Comment</label>
        </div>
      </div>
      <input type="submit" class ="" value="Submit"/>

    </form>
  </div>
    )
}

CommentForm.propTypes = {

    addComment: PropTypes.func.isRequired,


}


export default connect(null,{addComment})(CommentForm)