import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ProfileItems = ({profile: { user: {

    _id, name, avatar
}, hobbies,mangas,location}})=>{

    return (

        <div className = "flex-structure">

            <div className="inner-flex">

                <div className="profile-image">
                    <img src={avatar} alt="" className = "round-img"/>
                    <Link to={`/profile/${_id}`} className ="btn btn-primary">View</Link>
                    
                </div>

                <div className="profile-description">
                    <ul>
                        <li>{name}</li>
                        <li>{location}</li>
                        
                    </ul>
                </div>

            </div>


            <div className="hobbies">


                <ul>
                    {hobbies.slice(0,4).map((hobbie, index)=>(

                    <li key={index}>{hobbie}</li>
                    ))}
                
                </ul>
            </div>
            
        </div>
    )


}

ProfileItems.propTypes={

    profile: PropTypes.object.isRequired,


};

export default ProfileItems;