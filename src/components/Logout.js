import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    localStorage.removeItem("loginAs");
    this.props.handleUpdate(false);
  }

  render() {
    // const { login } = this.props;
    return <Redirect to="/login" />;
  }
}

export default Logout;
