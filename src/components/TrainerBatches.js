import React, { useEffect, useState } from "react";
import cookie, { load } from "react-cookies";

import { Posts, StudentsTab, GradesTab, Discussion, Loader } from "./index";
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
  const handleBatch = useInput();

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
        loader.setValue(false);
        console.log("error", error);
      });
  }, []);

  function handleBatchClick(id) {
    handleBatch.setValue(id);
  }

  return (
    <div>
      {loader.value ? (
        <Loader />
      ) : (
        // <div></div>
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
                onClick={() => {
                  handleBatchClick(data.id);
                }}
              >
                <span className="assignmentName">{data.batch_name}</span>
              </a>
            </p>
            <div
              className="collapse"
              id={"course-" + props.course_id + "batch" + data.id}
            >
              {handleBatch.value == data.id && (
                <div>
                  {props.tab == "students" && (
                    <StudentsTab batch_id={data.id} key={data.id} />
                  )}
                  {props.tab == "courses" && (
                    <Posts id={data.id} key={data.id} user="teacher" />
                  )}
                  {props.tab == "grades" && (
                    <GradesTab
                      batch_id={data.id}
                      key={data.id}
                      user="teacher"
                    />
                  )}
                  {props.tab == "discussion" && (
                    <Discussion
                      batch_id={data.id}
                      key={data.id}
                      user="teacher"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TrainerBatches;
