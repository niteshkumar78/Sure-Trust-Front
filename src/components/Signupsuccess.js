import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";

class Signupsuccess extends Component {
  render() {
    try {
      if (this.props.location.state.access) {
        return (
          <div style={{ height: "520px" }}>
            <div className=" h-100 d-flex justify-content-center align-items-center">
              <div className="card text-center">
                <div className="card-header">
                  <h1 className="card-title">Email Verification &#x2709;</h1>
                </div>
                <div className="card-body">
                  <h4>
                    Go and check your Email Inbox and Verify your Email and
                    Login
                  </h4>
                  <h4>&#128231;</h4>
                  <Link to="/login" className="btn btn-primary">
                    Go to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    } catch (err) {
      return <Redirect to="/login"></Redirect>;
    }
  }
}

export default Signupsuccess;
