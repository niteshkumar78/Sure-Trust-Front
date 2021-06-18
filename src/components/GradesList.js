import React, { useState, useEffect } from "react";
import cookie from "react-cookies";

import { GradesStudentsList } from "../apis/allApis";
import { Studentgrades } from "./index";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value: value,
    setValue,
  };
}

function GradesList(props) {
  const { post_id } = props;
  const studentsList = useInput([]);
  const loader = useInput(false);

  useEffect(() => {
    loader.setValue(true);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "post-id": props.post_id,
        "Content-Type": "application/json",
      },

      redirect: "follow",
    };

    fetch(GradesStudentsList, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);
        studentsList.setValue(result);
        console.log("Grades Students List", result);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      {loader.value ? (
        <div className="containerLoader" style={{ minHeight: "20vh" }}>
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Reg No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date of submission</th>
              <th scope="col">Download</th>
              <th scope="col">Grades</th>
            </tr>
          </thead>

          <tbody>
            {studentsList.value.map((value) => (
              <Studentgrades value={value} post_id={post_id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default GradesList;
