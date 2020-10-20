import React,{useEffect,Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getProfiles} from '../../actions/profileActions';
import ProfileItems from './ProfileItems';

const  Profiles = ({getProfiles, profile:{profiles,loading}})=>{

    useEffect(()=>{

        getProfiles();
    },[])

    return(

        <Fragment>

            {/* If loading show spinner else show fragment */}
            {loading ? <Spinner/> : <Fragment>

                <h1>Members</h1>
                <p className ="lead">Connect with members</p>
                <div className="profiles">
                    {/* As long as profile length is greater than 0 display profile or show message there are no profiles */}
                    {profiles.length > 0 ? (profiles.map(profile=>(
                        <ProfileItems key = {profile._id} profile ={profile}/>
                    ))): <h4> No profiles found</h4>}
                </div>
                
                </Fragment>}

        </Fragment>
    )


}

Profiles.propTypes = {

    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

    profile: state.profileReducer
})


export default connect(mapStateToProps, {getProfiles})(Profiles);