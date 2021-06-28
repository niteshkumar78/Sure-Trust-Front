import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import cookie from "react-cookies";

import { TeacherCourseListApi } from "../apis/allApis";
import { StudentIndex, Loader } from "./index";

const context = React.createContext();

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

    fetch(
      "https://suretrustplatform.herokuapp.com/courses/batch/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        courses.setValue(result);
        loader.setValue(false);
        console.log("Course API", result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (props.login) {
    return (
      <context.Provider value={{ courses }}>
        {loader.value ? (
          <Loader />
        ) : (
          <div>
            <StudentIndex />
          </div>
        )}
      </context.Provider>
    );
  }
  return <Redirect to="/login" />;
}

export default Student;
export { context };
