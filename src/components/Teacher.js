import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Teacher extends Component {
  render() {
    if (this.props.login) {
      return (
        <div>
          <div style={{ height: "520px" }}>
            <div className=" h-100 d-flex justify-content-center align-items-center">
              <h1>COMING SOON</h1>
            </div>
          </div>
        </div>
      );
    }
    return <Redirect to="/login" />;
  }
}

export default Teacher;
