import React, { useState } from "react";
// import { context } from "./Student";

import { StudentCourses } from "./index";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function StudentIndex(props) {
  // const teacherDetails = useInput({});
  const trainerNav = useInput("");

  // const value = React.useContext(context);
  // console.log("context", value.courses.value);

  const courses = props.courses;

  function handleNavClick(nav) {
    trainerNav.setValue(nav);
  }

  return (
    <div>
      <div
        className="container-fluid sure-bg main"
        // style={{ paddingTop: "0px" }}
      >
        <div className="row dashsboard">
          <div className=" flex-column  bg-light sideNav">
            <a
              href="/"
              className=" align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32"></svg>
              <span className="fs-4">Dashboard</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item" key="coursePost">
                <a
                  className="nav-link active dashboardTabsButton"
                  id="cousrepost-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cousrepost"
                  type="button"
                  role="tab"
                  aria-controls="cousrepost"
                  aria-selected="true"
                  onClick={() => handleNavClick("coursePost")}
                >
                  Course Posts
                </a>
              </li>

              <li className="nav-item" key="grades">
                <a
                  className="nav-link dashboardTabsButton"
                  id="grade-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#grade"
                  type="button"
                  role="tab"
                  aria-controls="grade"
                  aria-selected="false"
                  onClick={() => {
                    handleNavClick("grades");
                  }}
                >
                  Grades
                </a>
              </li>
              <li className="nav-item" key="recordings">
                <a
                  className="nav-link dashboardTabsButton"
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
                  className="nav-link dashboardTabsButton"
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
                    aria-controls="cousrepost"
                    aria-selected="true"
                    onClick={() => handleNavClick("coursePost")}
                  >
                    Course Posts
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
              </ul>
            </div>
            <div className="tab-content " id="myTabContent">
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
                    <StudentCourses
                      tab="posts"
                      StudentDetails={props.StudentDetails}
                      courses={props.courses}
                    />
                  )
                ) : (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div style={{ height: "300px" }}>
                      <div className=" h-100 d-flex justify-content-center align-items-center">
                        <div>
                          <h1 style={{ marginLeft: "15px" }}>
                            Welcome To Sure Trust Student Dashboard
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="tab-pane fade dispaly-5"
                id="grade"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                {trainerNav.value === "grades" && (
                  <StudentCourses tab="grades" courses={props.courses} />
                )}
              </div>
              <div
                className="tab-pane fade dispaly-5"
                id="recording"
                role="tabpanel"
                aria-labelledby="recording-tab"
              >
                {/* {trainerNav.value === "recording" && (
                  <StudentCourses
                    tab="recording"
                    StudentDetails={props.StudentDetails}
                    courses={props.courses}
                  />
                )} */}
                <h1>Comming Soon...</h1>
              </div>
              <div
                className="tab-pane fade dispaly-5"
                id="Discussion"
                role="tabpanel"
                aria-labelledby="Discussion-tab"
              >
                {trainerNav.value === "discussion" && (
                  <StudentCourses tab="discussion" courses={props.courses} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentIndex;
