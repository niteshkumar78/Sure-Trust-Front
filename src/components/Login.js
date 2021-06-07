import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    let loginAs = localStorage.getItem("loginAs");
    if (localStorage.getItem("loginAs") == null) {
      loginAs = "student";
    }
    this.state = {
      email: "",
      password: "",
      login1: false,
      login_as: loginAs,
      loginButton: true,
      error: false,
      errorType: "",
    };
    console.log(document.cookie);
  }

  handleSubmit = (e) => {
    this.setState({
      loginButton: false,
    });
    fetch("http://suretrustplatform.herokuapp.com/users/get-token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        login_as: this.state.login_as,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (typeof data.token != "undefined") {
          localStorage.setItem("token", data.token);
          this.setState({
            login: true,
          });
          this.props.handleUpdate(true);
          let LoginAs;
          if (typeof data.regno != "undefined") {
            LoginAs = "student";
          } else {
            LoginAs = "teacher";
            this.setState({
              login_as: "teacher",
            });
          }
          localStorage.setItem("loginAs", LoginAs);
        } else {
          this.setState({
            error: true,
            errorType: data.error,
          });
        }
        this.setState({
          loginButton: true,
        });
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

    // console.log(this.state);
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLoginAsStudent = (e) => {
    this.setState({
      login_as: "student",
      email: "",
      password: "",
    });
  };

  handleLoginAsTeacher = (e) => {
    this.setState({
      login_as: "teacher",
      email: "",
      password: "",
    });
  };

  componentWillUnmount() {
    console.log("Login");
  }

  render() {
    const { login } = this.props;

    console.log(this.state);

    return (
      <div>
        {login ? (
          <Redirect to={this.state.login_as} />
        ) : (
          <div>
            <ul
              className="nav nav-pills mb-3 justify-content-center login-tab"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={this.handleLoginAsStudent}
                >
                  Login as Student
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  onClick={this.handleLoginAsTeacher}
                >
                  Login as Teacher
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="signup-form">
                  <form onSubmit={this.handleSubmit}>
                    <h2>SignIn as Student</h2>
                    <p className="hint-text">
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
                    </div>
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
                        onChange={this.handleChange}
                      ></input>
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
                          <div
                            className="spinner-border text-dark"
                            role="status"
                          >
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
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="signup-form">
                  <form onSubmit={this.handleSubmit}>
                    <h2>SignIn as Teacher</h2>
                    <p className="hint-text">
                      Sign Ip with your social media account or email address
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
                    </div>
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
                        onChange={this.handleChange}
                      ></input>
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
                          <div
                            className="spinner-border text-dark"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </button>
                      )}
                    </div>
                  </form>
                  <div className="text-center">
                    New to SureTrust <Link to="/signup">Create an Account</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
