import React, { useEffect, useState, useContext } from "react";
import cookie from "react-cookies";

import { context } from "./Teacher";
import { TrainerCourses, Discussion } from "./index";
import { TeacherDetailsApi } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function Traineeindex(props) {
  // const teacherDetails = useInput({});
  const trainerNav = useInput("");

  const value = React.useContext(context);
  // console.log("context", value.courses.value);

  const courses = value.courses.value;

  // console.log("teacher value", teacherDetails.value);

  // useEffect(() => {
  //   var requestOptions = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Token ${cookie.load("token")}`,
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //   };

  //   fetch(TeacherDetailsApi, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       teacherDetails.setValue(result[0]);
  //       console.log("teacher", result);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);

  function handleNavClick(nav) {
    trainerNav.setValue(nav);
  }

  return (
    <div>
      <div className="container-fluid sure-bg main">
        <div className="row dashsboard">
          {/* <div className="col-lg-3 col-sm-12 rounded h-50 d-inline-block">
            <div className="rounded w-100 bg-white text-center text-dark p-5 shadow-lg">
              <img
                className="center border rounded-circle w-100"
                src={teacherDetails.value.profice_pic}
                alt="no image"
                height="50%"
              />
              <div className="container w-100 h-auto mx-auto p-3 color1 profilepic">
                <br />
                <div className="mytxt1 p-1 mt-3 h3">
                  {teacherDetails.value.name}
                </div>
                <div className="mytxt2 p-1">
                  {teacherDetails.value.qualification}
                </div>
              </div>
            </div>
          </div> */}
          <div className=" flex-column  bg-light sideNav">
            <a
              href="/"
              className=" align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32">
                {/* <use xlink:href="#bootstrap" /> */}
              </svg>
              <span className="fs-4">Dashboard</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li key="coursePost">
                <a
                  className="nav-link active"
                  id="cousrepost-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cousrepost"
                  type="button"
                  role="tab"
                  aria-control="cousrepost"
                  aria-selected="true"
                  onClick={() => handleNavClick("coursePost")}
                >
                  Course Posts
                </a>
              </li>
              <li key="students">
                <a
                  className="nav-link "
                  id="trainerStudent-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#trainerStudent"
                  type="button"
                  role="tab"
                  aria-controls="trainerStudent"
                  aria-selected="false"
                  onClick={() => handleNavClick("students")}
                >
                  Students
                </a>
              </li>
              <li key="grades">
                <a
                  className="nav-link text-dark"
                  id="grade-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#grade"
                  type="button"
                  role="tab"
                  aria-controls="grade"
                  aria-selected="false"
                  onClick={() => handleNavClick("grades")}
                >
                  Grades
                </a>
              </li>
              <li key="recordings">
                <a
                  className="nav-link text-dark"
                  id="recoding-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#recording"
                  type="button"
                  role="tab"
                  aria-controls="recording"
                  aria-selected="false"
                  onClick={() => handleNavClick("recording")}
                >
                  Recording
                </a>
              </li>
              <li className="nav-item" key="discussion">
                <a
                  className="nav-link text-dark"
                  id="Discussion-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Discussion"
                  type="button"
                  role="tab"
                  aria-controls="Discussion"
                  aria-selected="false"
                  onClick={() => handleNavClick("discussion")}
                >
                  Discussion
                </a>
              </li>
            </ul>
            <hr />
            {/* <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>+ POST</strong>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    POST A MATERIAL
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    POST AN ASSIGNMENT
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    POST AN ANNOUNCEMENT
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className=" trainerNav col-lg-9 col-sm-12 bg-white rounded pt-3 d-inline-block">
            <div className="teacherTopnav">
              <ul
                className="nav nav-tabs shadow p-2 bg-white"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation" key="coursePost2">
                  <button
                    className="nav-link text-dark active"
                    id="cousrepost-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cousrepost"
                    type="button"
                    role="tab"
                    aria-control="cousrepost"
                    aria-selected="true"
                    onClick={() => handleNavClick("coursePost")}
                  >
                    Course Posts
                  </button>
                </li>
                <li className="nav-item" role="presentation" key="students2">
                  <button
                    className="nav-link text-dark"
                    id="trainerStudent-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#trainerStudent"
                    type="button"
                    role="tab"
                    aria-controls="trainerStudent"
                    aria-selected="false"
                    onClick={() => handleNavClick("students")}
                  >
                    Students
                  </button>
                </li>
                <li className="nav-item" role="presentation" key="grades2">
                  <button
                    className="nav-link text-dark"
                    id="grade-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#grade"
                    type="button"
                    role="tab"
                    aria-controls="grade"
                    aria-selected="false"
                    onClick={() => handleNavClick("grades")}
                  >
                    Grades
                  </button>
                </li>
                <li className="nav-item" role="presentation" key="recording2">
                  <button
                    className="nav-link text-dark"
                    id="recoding-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#recording"
                    type="button"
                    role="tab"
                    aria-controls="recording"
                    aria-selected="false"
                    onClick={() => handleNavClick("recording")}
                  >
                    Recording
                  </button>
                </li>
                <li className="nav-item" role="presentation" key="discussion2">
                  <button
                    className="nav-link text-dark"
                    id="Discussion-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Discussion"
                    type="button"
                    role="tab"
                    aria-controls="Discussion"
                    aria-selected="false"
                    onClick={() => handleNavClick("discussion")}
                  >
                    Discussion
                  </button>
                </li>

                {/* <li className="nav-item dropdown ml-auto mr-2 bg-sure">
                  <a
                    className="nav-link dropdown-toggle "
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    + POST
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        POST A MATERIAL
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        POST AN ASSIGNMENT
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        POST A NOTICE
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
            <div className="tab-content p-3" id="myTabContent">
              {/* {trainerNav.value === "" && (
                <div className="tab-pane fade show active" role="tabpanel">
                  <div style={{ height: "300px" }}>
                    <div className=" h-100 d-flex justify-content-center align-items-center">
                      <div>
                        <h1 style={{ marginLeft: "15px" }}>
                          Welcome To Sure Trust Trainer Dashboard
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}

              <div
                className="tab-pane fade show active"
                id="cousrepost"
                role="tabpanel"
                aria-labelledby="cousrepost-tab"
              >
                {trainerNav.value !== "" ? (
                  trainerNav.value === "coursePost" && (
                    <TrainerCourses tab="courses" />
                  )
                ) : (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div style={{ height: "300px" }}>
                      <div className=" h-100 d-flex justify-content-center align-items-center">
                        <div>
                          <h1 style={{ marginLeft: "15px" }}>
                            Welcome To Sure Trust Trainer Dashboard
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="tab-pane fade h-6"
                id="trainerStudent"
                role="tabpanel"
                aria-labelledby="trainerStudent-tab active"
              >
                {trainerNav.value === "students" && (
                  <TrainerCourses tab="students" />
                )}
              </div>
              <div
                className="tab-pane fade dispaly-5"
                id="grade"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                {trainerNav.value === "grades" && (
                  <TrainerCourses tab="grades" />
                )}
              </div>
              <div
                className="tab-pane fade dispaly-5"
                id="recording"
                role="tabpanel"
                aria-labelledby="recording-tab"
              >
                {/* {trainerNav.value === "discussion" && <DisscussionTab />} */}
              </div>
              <div
                className="tab-pane fade dispaly-5"
                id="Discussion"
                role="tabpanel"
                aria-labelledby="Discussion-tab"
              >
                {trainerNav.value === "discussion" && (
                  <TrainerCourses tab="discussion" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traineeindex;
