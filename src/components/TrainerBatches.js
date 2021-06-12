import React, { useEffect, useState } from "react";
import cookie, { load } from "react-cookies";

import { TrainerPosts, StudentsTab, GradesTab } from "./index";
import { BatchesApi } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function TrainerBatches(props) {
  const batches = useInput([]);
  const loader = useInput(false);

  console.log("batch state", batches);

  useEffect(() => {
    loader.setValue(true);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "course-id": props.course_id,
        "Content-Type": "application/json",
      },

      redirect: "follow",
    };

    fetch(BatchesApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);
        batches.setValue(result);
        console.log(`batch ${props.course_id}`, result);
      })
      .catch((error) => {
        // loader.setValue(false);
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      {loader.value ? (
        <div className="containerLoader" style={{ minHeight: "50vh" }}>
          <svg
            className="loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 340"
          >
            <circle cx="170" cy="170" r="160" stroke="#0d6efd" />
            <circle cx="170" cy="170" r="135" stroke="#404041" />
            <circle cx="170" cy="170" r="110" stroke="#0d6efd" />
            <circle cx="170" cy="170" r="85" stroke="#404041" />
          </svg>
        </div>
      ) : (
        batches.value.map((data) => (
          <div className="assignment batch">
            <p className="">
              <a
                className="btn btn-primary "
                data-bs-toggle="collapse"
                href={"#course-" + props.course_id + "batch" + data.id}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="assignmentName">{data.batch_name}</span>
              </a>
            </p>
            <div
              className="collapse"
              id={"course-" + props.course_id + "batch" + data.id}
            >
              {props.tab == "students" && <StudentsTab key={data.id} />}
              {props.tab == "courses" && (
                <TrainerPosts batch_id={data.id} key={data.id} />
              )}
              {props.tab == "grades" && <GradesTab key={data.id} />}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TrainerBatches;
