//user page

import React from "react";
import { Redirect } from "react-router";

const UserDashboard = ({ data }) => {
  // if (!authorized) {
  //   return <Redirect to="/" />;
  // }
  console.log(data);
  return (
    <div>
      <h1>User Dashboard</h1>
      <p></p>
    </div>
  );
};

export default UserDashboard;
