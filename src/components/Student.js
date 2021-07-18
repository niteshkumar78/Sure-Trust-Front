import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import cookie from "react-cookies";

import { StudentDetailsApi, SourceURL } from "../apis/allApis";
import { StudentIndex, Loader2 } from "./index";

// const context = React.createContext();

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function Student(props) {
  const courses = useInput([]);
  const loader = useInput(true);
  const regno = cookie.load("regno");
  const StudentDetails = useInput({});
  console.log("Student");

  useEffect(() => {
    // loader.setValue(true);

    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        // Authorization: `Token ${localStorage.getItem("token")}`,
      },
      redirect: "follow",
    };

    fetch(`${SourceURL}/courses/batch/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        courses.setValue(result);
        setTimeout(() => {
          loader.setValue(false);
        }, 1000);
        console.log("Course API", result);
      })
      .catch((error) => console.log("error", error));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // loader.setValue(true);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch(`${StudentDetailsApi}${regno}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("student Details", result);
        // loader.setValue(false);
        StudentDetails.setValue(result);
      })
      .catch((error) => {
        // loader.setValue(false);
        console.log("error", error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (props.login) {
    return (
      // <context.Provider value={{ courses }}>
      <div style={{ marginTop: "7rem", minHeight: "70vh" }}>
        {loader.value ? (
          <Loader2 />
        ) : (
          <StudentIndex
            courses={courses.value}
            StudentDetails={StudentDetails.value}
          />
        )}
      </div>
      // </context.Provider>
    );
  }
  return <Redirect to="/login" />;
}

export default Student;
// export { context };
