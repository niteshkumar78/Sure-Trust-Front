import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Navbar,
  Footer,
  Login,
  Teacher,
  Logout,
  Page404,
  Home,
  Student,
  Signup,
  Signupsuccess,
  Courses,
} from "./index";

class App extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this.state = {
      login: false,
      loginAs: "",
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      const token = localStorage.getItem("token");
      let loginAs = localStorage.getItem("loginAs");
      if (token) {
        this.setState({
          login: true,
          loginAs: loginAs,
        });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    console.log("App");
  }

  handleUpdate = (res) => {
    this.setState({
      login: res,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar login={this.state.login} handleUpdate={this.handleUpdate} />

          <Switch>
            {this.state.loginAs == "student" && (
              <Route
                exact={true}
                path="/student/courses"
                render={(props) => {
                  return (
                    <Courses
                      {...props}
                      login={this.state.login}
                      handleUpdate={this.handleUpdate}
                    />
                  );
                }}
              />
            )}
            {/* {this.state.loginAs=="teacher"&&} */}
            <Route
              exact={true}
              path="/"
              render={(props) => {
                return <Home {...props} login={this.state.login} />;
              }}
            />

            <Route
              exact={true}
              path="/teacher"
              render={(props) => {
                return (
                  <Teacher
                    {...props}
                    login={this.state.login}
                    handleUpdate={this.handleUpdate}
                  />
                );
              }}
            />
            <Route
              exact={true}
              path="/student"
              render={(props) => {
                return (
                  <Student
                    {...props}
                    login={this.state.login}
                    handleUpdate={this.handleUpdate}
                  />
                );
              }}
            />

            <Route
              exact
              path="/signup"
              render={(props) => {
                return (
                  <Signup
                    {...props}
                    login={this.state.login}
                    handleUpdate={this.handleUpdate}
                  />
                );
              }}
            />

            <Route
              exact
              path="/signup/signupsuccess"
              render={(props) => {
                return (
                  <Signupsuccess
                    {...props}
                    login={this.state.login}
                    handleUpdate={this.handleUpdate}
                  />
                );
              }}
            />

            <Route
              exact
              path="/login"
              render={(props) => {
                return (
                  <Login
                    {...props}
                    login={this.state.login}
                    handleUpdate={this.handleUpdate}
                  />
                );
              }}
            />
            <Route
              exact
              path="/logout"
              render={(props) => {
                return (
                  <Logout
                    {...props}
                    login={this.state.login}
                    handleUpdate={this.handleUpdate}
                  />
                );
              }}
            />

            <Route component={Page404}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
