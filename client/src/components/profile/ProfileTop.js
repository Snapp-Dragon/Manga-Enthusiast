import React from 'react'
import PropTypes from 'prop-types'


const ProfileTop = ({profile: { 
    bio,
    social,
    hobbies,
    mangas,
    location,
    user: {name, avatar}
} }) => {
    return (
        <div className="public-profile">
        <img
          className="round-img-profile my-2"
          src={avatar}
          alt=""
        />

    <h1 className="large">{name}</h1>
        <p class="lead">Developer at Microsoft</p>
    <p>{location}</p>
        <div className="icons my-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x mx-1 text-primary"></i>
          </a>
           <a href="http://www.youtube.com/chadfarrington" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x mx-1 text-primary"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x mx-1 text-primary"></i>
          </a>
        </div>
      </div>
    )
}

ProfileTop.propTypes = {

    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,

}

// const mapStateToProps = (state)=>({

//     profile: state.profileReducer,
  
// })

export default ProfileTop
