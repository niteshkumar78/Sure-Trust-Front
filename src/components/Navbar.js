import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import { CoursesList } from "../apis/allApis";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    fetch(CoursesList)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          courses: result,
        });
      });
  }

  componentWillUnmount() {
    console.log("Navbar");
  }

  render() {
    const { login, loginAs } = this.props;
    // const loginAs = cookie.load("loginAs");
    console.log("Check Refresh", loginAs);

    return (
      <div className="container-fluid text-center text-white">
        <div>
          <div className="row p-2" style={{ background: "rgba(59, 143, 197)" }}>
            <div className="col mt-auto mb-auto">
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
            </div>
            <div className="col-7 mt-auto mb-auto text-center">
              <p className="h4">
                "SURE" INITIATIVE - "SKILL UPGRADATION FOR RURAL - YOUTH
                EMPOWERMENT"
              </p>
            </div>
            <div className="col mt-auto mb-auto">
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
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 mb-3 text-center">
            <img
              className="d-block mx-auto"
              // src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/SURE%20INITIATIVE%20LOGO.png/:/rs=h:200,cg:true,m/qt=q:95"

              alt=""
            ></img>
          </div>
        </div>
        <nav
          className="navi navbar navbar-expand-lg navbar-white text-dark rounded"
          aria-label="Twelfth navbar example"
          style={{
            backgroundColor: "#f8f9fa",
            // borderTop: "1px solid black",
            // borderBottom: "1px solid black",
          }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample10"
              aria-controls="navbarsExample10"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-dark w-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-center text-dark"
              id="navbarsExample10"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown08"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    COURSE OFFERED
                  </a>
                  <ul
                    className="dropdown-menu overflow-auto shadow"
                    aria-labelledby="dropdown08"
                    style={{ height: 350 + "px" }}
                  >
                    {this.state.courses.map((data) => (
                      <li style={{ color: "black" }} id={data.id}>
                        <Link
                          className="dropdown-item"
                          to={{
                            pathname: `/course`,
                            courseData: data,
                          }}
                          onClick={() => {
                            this.props.handleCourseIdUpdate(data.id);
                          }}
                        >
                          <span>{data.id}</span>. &nbsp;{data.course_name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="../vidushi/knowMore.html" className="nav-link">
                    KNOW MORE
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    RESEARCH GUIDANCE
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MORE
                  </a>
                  <ul
                    className="dropdown-menu shadow"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        ABOUT SURE INITIATIVE
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        STUDENT CORNER
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        VOLUNTEER TO BE TRAINER ?
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        CONTACT POINT
                      </a>
                    </li>
                  </ul>
                </li>
                {login ? (
                  <li className="nav-item">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                          LOG OUT
                        </Link>
                      </li>
                      {loginAs == "teacher" && (
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Profile
                          </a>
                          <ul
                            className="dropdown-menu shadow"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li>
                              <Link className="dropdown-item" to="/teacher">
                                Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/teacher/profile"
                              >
                                Profile
                              </Link>
                            </li>
                          </ul>
                        </li>
                      )}
                      {loginAs === "student" && (
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Profile
                          </a>
                          <ul
                            className="dropdown-menu shadow"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li>
                              <Link className="dropdown-item" to="/student">
                                Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/student/profile"
                              >
                                Profile
                              </Link>
                            </li>
                          </ul>
                        </li>
                      )}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          LOGIN
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                          SIGNUP
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
