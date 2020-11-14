import React,{useEffect,Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import ProfileTop from './ProfileTop';
import {getProfileById} from '../../actions/profileActions';


const Profile = ({auth, getProfileById,match, profile:{loading, profile}})=>{

    useEffect(()=>{

        getProfileById(match.params.id);
      




    },[getProfileById]);


    return(

        <Fragment>
         {/* Check to see if the profile is loaded */}
         {profile === null ||  loading  ? <Spinner/> : <Fragment>
             

            <div className="profile-btn-section">

            <Link to="/profiles" className= "btn btn-primary">Profiles</Link>
             {/* if it is the user profile then show the edit button */}
            {auth.isAuthenticated && auth.loading === false  && auth.user._id === profile.user._id && (<Link to ='/edit-profile' className = "btn btn-primary">Edit Profiles</Link>)}

            </div>

             <div>
                <ProfileTop profile ={profile}/>
            </div> 
            
              
      
             
             </Fragment>}
             
       

        

        </Fragment>
    )

}


Profile.propTypes = {

    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,

    
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    profile: state.profileReducer,
  });
  
export default connect(mapStateToProps,{getProfileById}) (Profile);

