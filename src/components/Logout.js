import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import cookie from "react-cookies";

class Logout extends Component {
  componentDidMount() {
    // localStorage.removeItem("token");
    // localStorage.removeItem("loginAs");
    cookie.remove("token", { path: "/" });
    cookie.remove("loginAs", { path: "/" });
    cookie.remove("teacherId", { path: "/" });
    this.props.handleUpdate(false);
  }

  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;
