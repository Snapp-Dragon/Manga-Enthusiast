import React,{Fragment} from 'react';
import PropTypes from 'prop-types';


const ProfileAbout = ({profile:{ bio, mangas,hobbies, user: {name}} })=>{

    return(

        <div class="public-profile">

            {/* If there is a bio then show bio */}
            {bio && (<Fragment>

                {/* take the first name */}
                <h4>{name.trim().split(' ')[0]}'s Bio</h4>
        <p >
          {bio}
        </p>

        <div class="line"></div>

            </Fragment>) }
        
       
        <h4>Manga's Read</h4>
       
        <div class="manga-list">
          {/* map through array of mangas */}
          {mangas.map((manga,index)=>(


            //change look to more of a car later
              <div key = {index} className= "p-1">

                  <i className="material-icons">local_library</i> {manga}

              </div>

          ))}

          
        </div>

        <div>
        <div class="line-hobbies"></div>
        <h4>Hobbies</h4>
          {hobbies.map((hobby , index)=>(

            <div key = {index} className="p-1">

                {hobby}

            </div>
          ))}
        </div>
      </div>
    )






}

ProfileAbout.propTypes = {
    
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,



}

export default ProfileAbout;