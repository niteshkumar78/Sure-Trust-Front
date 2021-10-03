/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

import { SourceURL } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function TeacherRecording(props) {
  const { name } = props.teacherDetails;
  const { data } = props;
  const code = useInput(data.meeting_code);

  console.log("meet code", code.value);

  useEffect(() => {});

  function handleFetchMeetingApi(code1) {
    var raw = JSON.stringify({
      meeting_code: code1,
    });

    var requestOptions = {
      method: "PATCH",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "course-id": props.course_id,
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    fetch(`${SourceURL}/courses/batch/${props.batch_id}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        code.setValue(result.meeting_code);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

  function handleMeetingCode() {
    var code1 = "batch" + props.batch_id + " " + Date.now();
    localStorage.setItem("MeetNameTeacher", name);
    localStorage.setItem("MeetCodeTeacher", code1);

    handleFetchMeetingApi(code1);
  }

  function handleEndMeeting() {
    // code.setValue(null);
    handleFetchMeetingApi(null);
    localStorage.removeItem("MeetNameTeacher");
    localStorage.removeItem("MeetCodeTeacher");
  }

  return (
    <div className="joinClassTeacher">
      {code.value === null ? (
        <Link
          className="btn btn-primary"
          onClick={() => {
            handleMeetingCode();
          }}
          to={{
            pathname: "/meet",
          }}
          target="blank"
          // type="button"
        >
          Start Meet &#x2B;
        </Link>
      ) : (
        <div>
          <Link
            className="btn btn-primary"
            onClick={() => {
              localStorage.setItem("MeetNameTeacher", name);
              localStorage.setItem("MeetCodeTeacher", code.value);
            }}
            to={{
              pathname: "/meet",
            }}
            target="blank"
            // type="button"
          >
            Join Meet &#x2B;
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleEndMeeting();
            }}
          >
            End Meet
          </button>
        </div>
      )}
    </div>
  );
}

export default TeacherRecording;
