import React, { useState } from "react";
import cookie from "react-cookies";

import { SourceURL } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function StudentGrades(props) {
  const assignment = useInput();

  console.log("Student Details", props.studentDetails);
  console.log("assignment: ", assignment.value);
  // console.log("Token", cookie.load("token"));
  console.log("postId", props.post_id);

  function handleAssignmentSubmit(e) {
    var formdata = new FormData();
    formdata.append("file", assignment.value);

    var requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "post-id": `${props.post_id}`,
        // "post-id": "90",
        // "Content-Type": "application/json",
      },
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${SourceURL}/courses/grades/${props.studentDetails.id}/`,
      // `${SourceURL}/courses/grades/${73}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Student Assignment Upload", result);
        props.studentSet.setValue([result]);
        // loader.setValue(false);
      })
      .catch((error) => {
        // loader.setValue(false);
        console.log("error", error);
      });
    e.preventDefault();
  }

  return (
    <div className="studentPostContent" style={{ margin: "10px" }}>
      {props.studentDetails.marks !== null && (
        <p style={{ textAlign: "right", margin: "0px" }}>
          <b>Marks:&nbsp;</b>
          {props.studentDetails.marks}
        </p>
      )}
      <p>{props.content}</p>
      {props.studentDetails.file !== null && (
        <div>
          <span>
            <b>File</b>
          </span>
          &nbsp;
          <a href={props.studentDetails.file} target="blank">
            click here
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>Work Submitted &#x2713;</span>
        </div>
      )}
      {props.studentDetails.file === null && (
        <form onSubmit={handleAssignmentSubmit}>
          <b> Submit Assignment:</b> &nbsp;
          <input
            type="file"
            id={"studentUpload-" + props.studentDetails.id}
            onChange={(e) =>
              assignment.setValue(
                document.getElementById(
                  `studentUpload-${props.studentDetails.id}`
                ).files[0]
              )
            }
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default StudentGrades;
