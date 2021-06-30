import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cookie from "react-cookies";

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
  TeacherProfile,
  CoursesList,
  StudentProfile,
  KnowMore,
  AboutSure,
  ContactPoint,
  ResearchPage,
  JitsiRecordingTeacher,
  JitsiRecordingStudent,
  AdminPost,
} from "./index";

class App extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    const expires = new Date();
    expires.setDate(Date.now() + 20000);

    this.state = {
      login: false,
      loginAs: "",
      courseId: undefined,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      const token = cookie.load("token");
      let loginAs = cookie.load("loginAs");
      // const token = localStorage.getItem("token");
      // let loginAs = localStorage.getItem("loginAs");
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

  handleUpdateLoginAs = (res) => {
    this.setState({
      loginAs: res,
    });
  };

  handleCourseIdUpdate = (res) => {
    this.setState({
      courseId: res,
    });
  };

  render() {
    const pathname = window.location.pathname;

    console.log("App LoginAs", this.state.loginAs);
    if (pathname === "/meet" && this.state.loginAs === "teacher") {
      return (
        <Router>
          <Route
            exact={true}
            path="/meet"
            render={(props) => {
              return <JitsiRecordingTeacher />;
            }}
          />
        </Router>
      );
    }
    if (pathname === "/meet-student" && this.state.loginAs === "student") {
      return (
        <Router>
          <Route
            exact={true}
            path="/meet-student"
            render={(props) => {
              return <JitsiRecordingStudent />;
            }}
          />
        </Router>
      );
    }

    return (
      <Router>
        <div>
          <Navbar
            login={this.state.login}
            loginAs={this.state.loginAs}
            handleUpdate={this.handleUpdate}
            handleCourseIdUpdate={this.handleCourseIdUpdate}
          />

          <Switch>
            <Route
              exact={true}
              path="/"
              render={(props) => {
                return <Home {...props} login={this.state.login} />;
              }}
            />

            {console.log("1", cookie.load("loginAs"))}

            <Route
              exact={true}
              path="/course"
              render={(props) => {
                return (
                  <CoursesList
                    {...props}
                    login={this.state.login}
                    courseId={this.state.courseId}
                    handleUpdate={this.handleUpdate}
                  />
                  // <div>hello</div>
                );
              }}
            />
            {console.log("2", cookie.load("loginAs"))}

            {/* FOR STUDENT ROUTES */}
            {this.state.loginAs === "student" && (
              <Route
                exact={true}
                path="/student/profile"
                render={(props) => {
                  return (
                    <StudentProfile
                      {...props}
                      login={this.state.login}
                      handleUpdate={this.handleUpdate}
                    />
                    // <div>Student Profile</div>
                  );
                }}
              />
            )}
            {/* FOR TEACHER ROUTES */}
            {this.state.loginAs === "teacher" && (
              <Route
                exact={true}
                path="/teacher/profile"
                render={(props) => {
                  return (
                    <TeacherProfile
                      {...props}
                      login={this.state.login}
                      handleUpdate={this.handleUpdate}
                    />
                  );
                }}
              />
            )}

            {this.state.loginAs === "teacher" && (
              <Route
                exact
                path="/admin/post/546546584685454"
                render={(props) => {
                  return <AdminPost />;
                }}
              />
            )}

            <Route
              exact
              path="/test"
              render={(props) => {
                return <div>dwefjew</div>;
              }}
            />

            <Route
              exact
              path="/knowMore"
              render={(props) => {
                return <KnowMore />;
              }}
            />

            <Route
              exact
              path="/aboutSureInitiative"
              render={(props) => {
                return <AboutSure />;
              }}
            />

            <Route
              exact
              path="/ContactPoint"
              render={(props) => {
                return <ContactPoint />;
              }}
            />
            <Route
              exact
              path="/researchPage"
              render={(props) => {
                return <ResearchPage />;
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
                    handleUpdateLoginAs={this.handleUpdateLoginAs}
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
                    handleUpdateLoginAs={this.handleUpdateLoginAs}
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
