/*eslint-disable*/
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import cookie from "react-cookies";

import { SignupApi } from "../apis/allApis";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
      phone: null,
      gender: "",
      loginButton: true,
      error: false,
      errorType: "",
      success: false,
      qualification: "",
      popupMessaeg: true,
    };
  }

  handleSubmit = (e) => {
    this.setState({
      loginButton: false,
    });
    if (this.state.password === this.state.confirm_password) {
      fetch(SignupApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          gender: this.state.gender,
          phone: this.state.phone,
          qualification: this.state.qualification,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          this.setState({
            loginButton: true,
          });
          if (data.email !== this.state.email) {
            this.setState({
              error: true,
              errorType: data.email[0],
            });
          } else {
            this.setState({
              success: true,
            });
          }
        })
        .catch((error) => {
          this.setState({
            error: true,
            errorType: "Something Went wrong",
          });
          this.setState({
            loginButton: true,
          });
          console.log(error);
        });
    } else {
      this.setState({
        error: true,
        errorType: "Password and Confiirm  Password doesn't match",
        confirm_password: "",
        password: "",
      });
      this.setState({
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
    console.log("Signup");
  }

  render() {
    // console.log(" state ", this.state);

    const { login } = this.props;

    // var loginAs2 = localStorage.getItem("loginAs");
    var loginAs2 = cookie.load("loginAs");

    if (loginAs2 === "teacher") {
      loginAs2 = "teacher";
    } else {
      loginAs2 = "student";
    }

    if (this.state.success) {
      return (
        <Redirect
          to={{
            pathname: "/signup/signupsuccess",
            state: { access: true },
          }}
        ></Redirect>
      );
    }

    // setInterval(() => {
    //   if (this.state.popupMessaeg) {
    //     this.setState({
    //       popupMessaeg: false,
    //     });
    //   } else {
    //     this.setState({
    //       popupMessaeg: true,
    //     });
    //   }
    // }, 10000);

    return (
      <div style={{ marginTop: "10rem", minHeight: "70vh" }}>
        {login ? (
          <Redirect to={loginAs2} />
        ) : (
          <div className="signup-form">
            {/* {this.state.popupMessaeg && (
              <div
                className="alert alert-primary"
                role="alert"
                style={{
                  color: "blue",
                  backgroundColor: "white",
                  fontWeight: "bold",
                }}
              >
                After Creating an account, login and enroll for the course of
                your choice{" "}
              </div>
            )} */}
            <section className="scrollSection" style={{ marginTop: "7rem" }}>
              <marquee
                scrollamount="10"
                direction="left"
                className="scrollMessages"
              >
                <svg
                  data-ux="SVG"
                  viewBox=" 0 0 35 35"
                  dataaids="SEASONAL_WINTER_LEFT_ICON_RENDERED"
                  className="svgcls"
                >
                  <g stroke="currentColor" fill="none" fillRule="evenodd">
                    <path d="M16.724 10.726l4.651 5.349M12.03 16.408L16.8 21.8M16.8 1.8v28M30.8 16.3h-28M15.8 1.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM30.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM1.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM15.8 30.8a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM23.05 10.05l-12.5 12.5M22.6 9.3a1 1 0 1 1 1.999-.002A1 1 0 0 1 22.6 9.3zM8.8 23.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM16.99 5.545l10.02 10.961M17 27.3l-10.7-11M27.01 16.131l-10.02 10.96M6.59 17.091l10.02-10.96M22.925 22.086L10.688 9.328M22.459 22.826a1 1 0 1 0 2 .043 1 1 0 0 0-2-.043zM8.953 8.542a1.001 1.001 0 1 0 2.002.04 1.001 1.001 0 0 0-2.002-.04z"></path>
                  </g>
                </svg>
                <p>
                  After Creating an account, login and enroll for the course of
                  your choice
                </p>
              </marquee>
            </section>
            <form onSubmit={this.handleSubmit}>
              <h2>Create an Account</h2>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              {/*
              <p className="hint-text">
                Sign up with your social media account or email address
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
                <input
                  type="password"
                  className="form-control form-controlInput input-lg"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                  value={this.state.confirm_password}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-controlInput input-lg"
                  name="name"
                  placeholder="Name"
                  required="required"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group form-control form-controlInput">
                <label>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio1"
                    value="male"
                    required="required"
                    onChange={this.handleChange}
                  ></input>
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="female"
                    required="required"
                    onChange={this.handleChange}
                  ></input>
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-controlInput input-lg"
                  name="qualification"
                  placeholder="qualification  i.e. B.Tech., M.Tech, etc."
                  required="required"
                  value={this.state.qualification}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control form-controlInput input-lg"
                  name="phone"
                  placeholder="Mobile Number"
                  required="required"
                  value={this.state.phone}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-group">
                {this.state.loginButton ? (
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block signup-btn"
                  >
                    Sign Up
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
            </form>
            <div className="text-center">
              Already have an account? <Link to="/login">Login here</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Signup;
