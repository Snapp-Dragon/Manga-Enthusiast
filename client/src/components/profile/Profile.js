import React,{useEffect,Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import {getProfileById} from '../../actions/profileActions';


const Profile = ({auth, getProfileById,match, profile:{loading, profile}})=>{

    useEffect(()=>{

        getProfileById(match.params.id);
      




    },[getProfileById]);


    return(

        <div>
            {profile}
        </div>
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

