import React, { useEffect, useState } from "react";
import cookie from "react-cookies";

import { Loader, DisplayTrainerBatches } from "./index";
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
  // const handleBatchChange = useInput(false);
  // var handleBatch = 0;
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
    // handleBatch = id;
    // handleBatchChange.setValue(true);
  }

  return (
    <div>
      {loader.value ? (
        <Loader />
      ) : (
        // <div></div>
        batches.value.map((data) => (
          <DisplayTrainerBatches
            teacherDetails={props.teacherDetails}
            course_id={props.course_id}
            data={data}
            tab={props.tab}
          />
        ))
      )}
    </div>
  );
}

export default TrainerBatches;
