import React from 'react';
import PropTypes from 'prop-types';
import { profile_url } from 'gravatar';



const Social = ({social})=>{
  



    return(
        <div>
            <p className ='lead'>Social Media</p>
            <div className="social-group">
            <i className="fab fa-youtube prefix my-1 small"></i> {""}
                   {!social?.youtube ? <p className ="text-primary">add a youtube link</p> : social.youtube}
           
            </div>
            
            <div className="social-group">
            <i className="fab fa-facebook prefix my-1 small"></i>
                {!social?.facebook ? <p className ="text-primary">add a facebook link</p> : social.facebook}
      
            </div>
            
            <div className="social-group">
            <i className="fab fa-twitter prefix my-1 small"></i>
                {!social?.twitter ? <p className = "text-primary">add a twitter link</p> : social.twitter}
          
            </div>
            
            <div className="social-group">
            <i className="fab fa-instagram prefix my-1 small"></i>
                {!social?.instagram? <p className = "text-primary">add an instagram link</p> : social.instagram}
            
            </div>
            
        </div>

   
     )
}


Social.propTypes = {


}


export default Social