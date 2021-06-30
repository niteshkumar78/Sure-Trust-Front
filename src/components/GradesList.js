import React, { useState, useEffect } from "react";
import cookie from "react-cookies";

import { GradesStudentsList } from "../apis/allApis";
import { TeacherStudentgrades, Loader } from "./index";

import StudentGrades1 from "./StudentGrades1";

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
  const loader = useInput(true);
  console.log("Grades Students List", studentsList.value);

  console.log("post Id", post_id);

  useEffect(() => {
    // loader.setValue(true);
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
        studentsList.setValue(result);
        console.log("Grades Students List", result);
        loader.setValue(false);
      })
      .catch((error) => {
        // loader.setValue(false);
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      {loader.value ? (
        <Loader />
      ) : (
        <React.Fragment>
          {props.user === "teacher" ? (
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
                  <TeacherStudentgrades value={value} post_id={post_id} />
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              <StudentGrades1
                studentDetails={studentsList.value[0]}
                studentSet={studentsList}
                post_id={post_id}
                content={props.content}
              />
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default GradesList;
