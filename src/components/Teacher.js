import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Traineeindex from "./Trainerindex";
import cookie from "react-cookies";
import { TeacherCourseListApi, TeacherDetailsApi } from "../apis/allApis";
import { Loader } from "./index";

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
        loader.setValue(false);
        // console.log("batches", result);
      })
      .catch((error) => console.log("error", error));
  }, []);

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
  }, []);

  if (props.login) {
    return (
      <context.Provider value={{ courses }}>
        {loader.value ? (
          <Loader />
        ) : (
          <div style={{ marginTop: "6rem" }}>
            <Traineeindex teacherDetails={teacherDetails.value} />
          </div>
        )}
      </context.Provider>
    );
  }
  return <Redirect to="/login" />;
}

export default Teacher;
export { context };
