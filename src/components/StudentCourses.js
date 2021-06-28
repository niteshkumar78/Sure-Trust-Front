import React, { useEffect, useState } from "react";
import { context } from "./Student";

import { Posts, Discussion, GradesTab } from "./index";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function StudentCourses(props) {
  const value = React.useContext(context);
  const courseId = useInput(undefined);

  console.log("Courses value", value.courses.value);

  console.log("type", props.tab);

  const courses = value.courses.value;
  let active1 = "active btn-primary";
  let active2 = "active";
  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {courses.map((data) => (
          <li className="nav-item" role="presentation">
            <button
              className={"nav-link " + active1}
              // className="nav-link"
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
                // class="btn btn-primary "
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
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id={"offcanvasRight-" + data.id}
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 id={"offcanvasRightLabel"}>
                  <b>Course Details</b>
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss={"offcanvas"}
                  aria-label="Close"
                ></button>
              </div>
              <div class={"offcanvas-body"}>
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
                  <b>Course Start Time :</b> {data.start_time}
                </p>
                <p>
                  <b>Course End Date :</b> {data.end_date}
                </p>
                <p>
                  <b>Course End Time :</b> {data.end_time}
                </p>
              </div>
            </div>
            {(courseId.value === data.course.id || active2 != "") && (
              <div>
                {(active2 = "")}
                {props.tab === "posts" && (
                  <Posts
                    id={data.course.id}
                    key={data.course.id}
                    user="student"
                  />
                )}
                {props.tab === "discussion" && (
                  <Discussion batch_id={data.course.id} user="student" />
                )}
                {props.tab === "grades" && (
                  <GradesTab user="student" batch_id={data.course.id} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCourses;
