import React, { useState } from "react";
// import { context } from "./Student";

import { Posts, Discussion, GradesTab, StudentRecording } from "./index";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function StudentCourses(props) {
  // const value = React.useContext(context);
  const courseId = useInput(undefined);

  // console.log("Courses value", value.courses.value);

  console.log("type", props.tab);

  const courses = props.courses;
  let active1 = "active btn-primary";
  let active2 = "active";
  return (
    <React.Fragment>
      {courses.length === 0 ? (
        <div style={{ height: "420px" }}>
          <div className=" h-100 d-flex justify-content-center align-items-center">
            <div>
              <h1 style={{ marginLeft: "15px" }}>
                You are not Enrolled in any Course
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ul
            className="nav nav-pills mb-3 coursesListDashboard"
            id="pills-tab"
            role="tablist"
          >
            {courses.map((data) => (
              <li className="nav-item" role="presentation">
                <button
                  className={"nav-link " + active1}
                  // className="nav-link"
                  key={"studentCourse-" + data.course.id}
                  id={"pills-" + data.course.id + "-tab"}
                  data-bs-toggle="pill"
                  data-bs-target={"#pills-" + data.course.id}
                  type="button"
                  role="tab"
                  aria-controls={"pills-" + data.course.id}
                  aria-selected="true"
                  onClick={() => {
                    courseId.setValue(data.course.id);
                  }}
                >
                  {data.course.course_name}
                  {(active1 = "")}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {courses.map((data) => (
              <div
                className={"tab-pane fade show " + active2}
                id={"pills-" + data.course.id}
                role="tabpanel"
                aria-labelledby={"pills-" + data.course.id + "-tab"}
              >
                <div style={{ textAlign: "right", marginRight: "25px" }}>
                  <a
                    // className="btn btn-primary "
                    style={{ color: "blue" }}
                    type="button"
                    data-bs-toggle={"offcanvas"}
                    data-bs-target={"#offcanvasRight-" + data.id}
                    aria-controls={"offcanvasRight"}
                  >
                    Course Info &#x2139;
                  </a>
                </div>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id={"offcanvasRight-" + data.id}
                  aria-labelledby="offcanvasRightLabel"
                  style={{ zIndex: 9999999 }}
                >
                  <div className="offcanvas-header">
                    <h5 id={"offcanvasRightLabel"}>
                      <b>Course Details</b>
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss={"offcanvas"}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className={"offcanvas-body"}>
                    <p>
                      <b>Course Name :</b> {data.course.course_name}
                    </p>
                    <p>
                      <b>Prerequisites :</b> {data.course.prerequisites}
                    </p>
                    <p>
                      <b>Batch Name :</b> {data.batch_name}
                    </p>
                    <p>
                      <b>Course Start Date :</b> {data.start_date}
                    </p>
                    <p>
                      <b>Course End Date :</b> {data.end_date}
                    </p>
                  </div>
                </div>
                {(courseId.value === data.course.id || active2 != "") && (
                  <div>
                    {(active2 = "")}
                    {props.tab === "posts" && (
                      <React.Fragment>
                        <StudentRecording
                          user="student"
                          batch_id={data.course.id}
                          data={data}
                          StudentDetails={props.StudentDetails}
                        />
                        <Posts
                          id={data.id}
                          key={data.course.id}
                          user="student"
                        />
                      </React.Fragment>
                    )}
                    {props.tab === "discussion" && (
                      <Discussion batch_id={data.course.id} user="student" />
                    )}
                    {props.tab === "grades" && (
                      <GradesTab user="student" batch_id={data.course.id} />
                    )}
                    {/* {props.tab === "recording" && (
                      <StudentRecording
                        user="student"
                        batch_id={data.course.id}
                        data={data}
                        StudentDetails={props.StudentDetails}
                      />
                    )} */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default StudentCourses;
