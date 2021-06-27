import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function TeacherRecording(props) {
  const code = useInput(undefined);
  const { name } = props.teacherDetails;
  return (
    <div>
      {code.value === undefined ? (
        <Link
          className="btn btn-primary"
          onClick={() => {
            var code1 = "batch" + props.batch_id + " " + Date.now();
            localStorage.setItem("name", name);
            localStorage.setItem("code", code1);
            code.setValue(code1);
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
        <Link
          className="btn btn-primary"
          onClick={() => {
            localStorage.setItem("name", name);
            localStorage.setItem("code", code.value);
          }}
          to={{
            pathname: "/meet",
          }}
          target="blank"
          // type="button"
        >
          Join Meet &#x2B;
        </Link>
      )}
      <button
        className="btn btn-danger"
        onClick={() => {
          code.setValue(undefined);
        }}
      >
        End Meet
      </button>
    </div>
  );
}

export default TeacherRecording;
