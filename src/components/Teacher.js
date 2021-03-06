/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Traineeindex from "./Trainerindex";
import cookie from "react-cookies";
import { TeacherCourseListApi, TeacherDetailsApi } from "../apis/allApis";
import { Loader2 } from "./index";

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
  const loader = useInput(true);
  const teacherDetails = useInput({});
  // var state = {
  //   courses: courses.value,
  // };
  // console.log("courses", courses);
  useEffect(() => {
    // loader.setValue(true);
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
        courses.setValue(result);
        setTimeout(() => {
          loader.setValue(false);
        }, 1000); // console.log("batches", result);
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

    fetch(`${TeacherDetailsApi}${cookie.load("userId")}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        teacherDetails.setValue(result);
        // loader.setValue(false);
        console.log("teacher", result);
      })
      .catch((error) => {
        // loader.setValue(false);
        console.log("error", error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (props.login) {
    return (
      <context.Provider value={{ courses }}>
        <div style={{ marginTop: "7rem", minHeight: "70vh" }}>
          {loader.value ? (
            <Loader2 />
          ) : (
            <Traineeindex teacherDetails={teacherDetails.value} />
          )}
        </div>
      </context.Provider>
    );
  }
  return <Redirect to="/login" />;
}

export default Teacher;
export { context };
