/*eslint-disable*/
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import cookie from "react-cookies";

import { LoginApi } from "../apis/allApis";

class Login extends Component {
  constructor(props) {
    super(props);

    // let loginAs = localStorage.getItem("loginAs");
    let loginAs = cookie.load("loginAs");

    console.log(loginAs);
    if (loginAs == null) {
      loginAs = "";
    }
    this.state = {
      email: "",
      password: "",
      login1: false,
      loginAs: loginAs,
      loginButton: true,
      error: false,
      errorType: "",
    };
    console.log(document.cookie);
  }

  handleSubmit = (e) => {
    console.log("login1");
    this.setState({
      loginButton: false,
    });
    if (this.state.loginAs != "") {
      fetch(LoginApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          login_as: this.state.loginAs,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Login data", data);
          this.setState({
            loginButton: true,
          });
          if (typeof data.token != "undefined") {
            cookie.save("token", data.token, { maxAge: 604800, path: "/" });
            // localStorage.setItem("token", data.token);
            let LoginAs;
            if (typeof data.regno != "undefined") {
              LoginAs = "student";
              cookie.save("loginAs", "student", { maxAge: 604800, path: "/" });
              cookie.save("userId", data.user_id, {
                maxAge: 604800,
                path: "/",
              });
              cookie.save("regno", data.regno, { maxAge: 604800, path: "/" });
              this.props.handleUpdateLoginAs(LoginAs);
              // localStorage.setItem("userId", data.user_id);
              // localStorage.setItem("regno", LoginAs);
            } else {
              LoginAs = "teacher";
              cookie.save("loginAs", "teacher", { maxAge: 604800, path: "/" });
              this.props.handleUpdateLoginAs(LoginAs);
              cookie.save("userId", data.teacher_id, {
                maxAge: 604800,
                path: "/",
              });
              // localStorage.setItem("userId", data.teacher_id);
            }

            this.setState({
              login: true,
            });

            this.props.handleUpdate(true);

            // cookie.save("loginAs", LoginAs, { maxAge: 604800 });
            // localStorage.setItem("loginAs", LoginAs);
          } else {
            this.setState({
              error: true,
              errorType: data.error,
            });
          }
        })
        .catch((error) => {
          this.setState({
            error: true,
            errorType: "Something Went wrong",
            loginButton: true,
          });

          console.log(error);
        });
    } else {
      this.setState({
        error: true,
        errorType: "Please Enter Login Type",
        loginButton: true,
      });
    }
    // console.log(this.state);
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillUnmount() {
    console.log("Login");
  }

  render() {
    const { login } = this.props;

    console.log("Login Component");

    return (
      <div style={{ marginTop: "10rem", minHeight: "74vh" }}>
        {login ? (
          <Redirect to={this.state.loginAs} />
        ) : (
          <div>
            <div className="signup-form">
              <form onSubmit={this.handleSubmit}>
                <h2>SignIn Here</h2>
                <br></br>
                <br></br>
                <br></br>

                {/* <p className="hint-text">
                  Sign In with your social media account or email address
                </p>
                <div className="social-btn text-center">
                  <a href="#" className="btn btn-primary btn-lg">
                    <i className="fa fa-facebook"></i> Facebook
                  </a>
                  <a href="#" className="btn btn-info btn-lg">
                    <i className="fa fa-twitter"></i> Twitter
                  </a>
                  <a href="#" className="btn btn-danger btn-lg">
                    <i className="fa fa-google"></i> Google
                  </a>
                </div>
                <div className="or-seperator">
                  <b>or</b>
                </div> */}
                {this.state.error && (
                  <div className="alert alert-danger" role="alert">
                    {this.state.errorType}
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-controlInput input-lg"
                    name="email"
                    placeholder="Email Address"
                    required="required"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-controlInput input-lg"
                    name="password"
                    placeholder="Password"
                    required="required"
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={this.state.loginAs}
                    name="loginAs"
                    onChange={this.handleChange}
                    style={{ border: "3px solid #0d6efd" }}
                  >
                    <option value="loginAs">LoginAs</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>

                <div className="form-group">
                  {this.state.loginButton ? (
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block signup-btn"
                    >
                      Sign In
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-secondary btn-lg btn-block "
                      disabled
                    >
                      Signing...&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </button>
                  )}
                </div>
                <div className="form-group">
                  <div className="text-center">
                    <a
                      href="http://suretrustplatform.herokuapp.com/users/reset_password/"
                      target="_blank"
                    >
                      forgot password
                    </a>
                  </div>
                </div>
              </form>
              <div className="text-center">
                New to SureTrust <Link to="/signup">Create an Account</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
