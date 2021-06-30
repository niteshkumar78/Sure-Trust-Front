import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import cookie from "react-cookies";

class Logout extends Component {
  // componentDidMount() {
  //   // localStorage.removeItem("token");
  //   // localStorage.removeItem("loginAs");
  //   // localStorage.removeItem("userId");
  //   // localStorage.removeItem("regno");
  //   cookie.remove("token", { path: "/" });
  //   cookie.remove("loginAs", { path: "/" });
  //   cookie.remove("userId", { path: "/" });
  //   cookie.remove("regno", { path: "/" });
  //   // cookie.remove();
  //   this.props.handleUpdate(false);
  //   this.props.handleUpdateLoginAs("");
  // }

  render() {
    console.log("Logout Component");
    cookie.remove("token", { path: "/" });
    cookie.remove("loginAs", { path: "/" });
    cookie.remove("userId", { path: "/" });
    cookie.remove("regno", { path: "/" });
    localStorage.removeItem("MeetCodeStudent");
    localStorage.removeItem("MeetNameStudent");
    localStorage.removeItem("MeetCodeTeacher");
    localStorage.removeItem("MeetNameTeacher");
    // cookie.remove();
    // cookie.remove();
    this.props.handleUpdate(false);
    this.props.handleUpdateLoginAs("");
    return <Redirect to="/login" />;
  }
}

export default Logout;
