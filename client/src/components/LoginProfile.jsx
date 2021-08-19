import React from "react";
import { Dropdown } from "react-bootstrap";
import { CgUser } from "react-icons/cg";
import useAuth from "../auth/useAuth";
const LoginProfile = (props) => {
  const showProfile = () => {};
  const closeProfile = () => {};

  const auth = useAuth();

  return (
    <h1 style={{ color: "black" }} onClick={auth.logout()}>
      logout
    </h1>
  );
};

export default LoginProfile;
