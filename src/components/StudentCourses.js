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
              id={"pills-" + data.id + "-tab"}
              data-bs-toggle="pill"
              data-bs-target={"#pills-" + data.id}
              type="button"
              role="tab"
              aria-controls={"pills-" + data.id}
              aria-selected="true"
              onClick={() => {
                courseId.setValue(data.id);
              }}
            >
              {data.course_name}
              {(active1 = "")}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {courses.map((data) => (
          <div
            className={"tab-pane fade show " + active2}
            id={"pills-" + data.id}
            role="tabpanel"
            aria-labelledby={"pills-" + data.id + "-tab"}
          >
            {(courseId.value === data.id || active2 != "") && (
              <div>
                {(active2 = "")}
                {props.tab === "posts" && (
                  <Posts id={data.id} key={data.id} user="student" />
                )}
                {props.tab === "discussion" && (
                  <Discussion batch_id={data.id} user="student" />
                )}
                {props.tab === "grades" && (
                  <GradesTab user="student" batch_id={data.id} />
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
