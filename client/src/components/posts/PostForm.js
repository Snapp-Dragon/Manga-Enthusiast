import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../../actions/postActions';



const PostForm = ({addPost})=>{


    const [text, setText] = useState('');


 
    return(
    <div class="row">
    <form class="col s12" onSubmit={ e=>{

        e.preventDefault();
        addPost({text});
        setText('');
       

    }}>
      <div class="row">
        <div class="input-field col s12">
          <textarea id={text} class="materialize-textarea" onChange = {e=> setText(e.target.value)} value={text} required ></textarea>
          <label for="textarea1">Make A POST</label>
        </div>
      </div>
      <input type="submit" class ="" value="Submit"/>

    </form>
  </div>
    )


}

PostForm.propTypes = {

    addPost: PropTypes.func.isRequired,

}


export default connect(null, {addPost}) (PostForm)