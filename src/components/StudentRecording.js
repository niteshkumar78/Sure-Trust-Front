/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

function StudentRecording(props) {
  console.log(props.data.meeting_code);
  return (
    <div className="joinClassStudent">
      {props.data.meeting_code === null ? (
        <button className="btn btn-secondary" disabled>
          Join Class
        </button>
      ) : (
        <Link
          className="btn btn-primary"
          onClick={() => {
            localStorage.setItem("MeetCodeStudent", props.data.meeting_code);
            localStorage.setItem("MeetNameStudent", props.StudentDetails.name);
            localStorage.setItem("TEST", "test");
          }}
          to="/meet-student"
          target="blank"
        >
          Join Class
        </Link>
      )}
    </div>
  );
}

export default StudentRecording;
