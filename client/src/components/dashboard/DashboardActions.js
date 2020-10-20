import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <Link to="/edit-profile" class="btn-primary btn">
        <i className="material-icons left">create</i>Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
