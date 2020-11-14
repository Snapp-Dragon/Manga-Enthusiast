import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ProfileTop = ({profile: { 
    bio,
    social,
    hobbies,
    mangas,
    location,
    user: {name, avatar}
} }) => {
    return (
        <div class="public-profile">
        <img
          class="round-img-profile my-2"
          src={avatar}
          alt=""
        />

    <h1 class="large">{name}</h1>
        <p class="lead">Developer at Microsoft</p>
    <p>{location}</p>
        <div class="icons my-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-globe fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-2x mx-1 text-primary"></i>
          </a>
           <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram fa-2x mx-1 text-primary"></i>
          </a>
        </div>
      </div>
    )
}

ProfileTop.propTypes = {

    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,

}

const mapStateToProps = (state)=>({

    profile: state.profileReducer,
  
})

export default ProfileTop
