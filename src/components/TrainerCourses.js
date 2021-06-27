import React, { useEffect, useState } from "react";
import { context } from "./Teacher";
import { TrainerBatches } from "./index";

function TrainerCourses(props) {
  const value = React.useContext(context);
  console.log("context", value.courses.value);

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
            {(active2 = "")}
            <TrainerBatches
              teacherDetails={props.teacherDetails}
              course_id={data.id}
              tab={props.tab}
              key={data.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainerCourses;
