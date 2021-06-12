import React, { Component, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Traineeindex from "./Trainerindex";
import cookie from "react-cookies";
import { TeacherCourseListApi } from "../apis/allApis";

const context = React.createContext();

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function Teacher(props) {
  const courses = useInput([]);
  const loader = useInput(false);
  // var state = {
  //   courses: courses.value,
  // };
  console.log("courses", courses);
  useEffect(() => {
    loader.setValue(true);
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", `Token ${cookie.load("token")}`);

    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
      },
      redirect: "follow",
    };

    fetch(TeacherCourseListApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);
        courses.setValue(result);
        console.log("batches", result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (props.login) {
    return (
      <context.Provider value={{ courses }}>
        {loader.value ? (
          <div className="containerLoader">
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
          <div>
            <Traineeindex />
          </div>
        )}
      </context.Provider>
    );
  }
  return <Redirect to="/login" />;
}

export default Teacher;
export { context };
