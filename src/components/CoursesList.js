import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";

import cookie from "react-cookies";
import "../courseList.css";
import { AddToCourse } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function CoursesList(props) {
  const courseDetails = useInput({});
  const ApplySuccess = useInput(false);
  // const ParamsId = useParams().id;
  const ParamsId = props.courseId;
  // const ParamsId = props.location.courseData.id;
  const loginAs = cookie.load("loginAs");
  console.log("params", ParamsId);

  // console.log(courseDetails.value.syllabus);
  // useEffect(() => {
  //   this.props.handleCourseIdUpdate(ParamsId);
  // }, []);

  useEffect(() => {
    fetch(
      `https://suretrustplatform.herokuapp.com/courses/get-course/${ParamsId}/`
    )
      .then((res) => res.json())
      .then((result) => {
        courseDetails.setValue(result);
        console.log(result);
      });
  }, [ParamsId]);

  const handleApplyCourse = (e) => {
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
      },
      redirect: "follow",
    };

    fetch(`${AddToCourse}${ParamsId}/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("Apply Course", result);
        // ApplySuccess.setValue(true);
      })
      .catch((error) => console.log("error", error));
    e.preventDefault();
  };

  return (
    <div
      className="courseContainer"
      //   style={{ backgroundColor: "rgb(59, 143, 197)", color: "white" }}
    >
      <div className="d-flex">
        <h1 className="mr-auto p-2">
          <b>Course Details</b>
        </h1>
        <p className="ml-auto p-2">
          <b>{courseDetails.value.date}</b>
        </p>
      </div>
      <h2>
        <b>{courseDetails.value.course_name}</b>
      </h2>
      <div className="courseContainerMain">
        <div className=" h-100 d-flex justify-content-center align-items-center">
          <div style={{ textAlign: "center" }}>
            <h4>prerequisites: {courseDetails.value.prerequisites}</h4>
            {loginAs === "student" && (
              <div>
                <form onSubmit={handleApplyCourse}>
                  <button className="btn btn-secondary" id="liveToastBtn">
                    Enroll now
                  </button>
                </form>
              </div>
            )}
            {loginAs === undefined && (
              <Link className="btn btn-secondary" to="/login">
                Enroll now
              </Link>
            )}
          </div>
        </div>
        {/* <h1>Syllabus: </h1> */}
        <div>
          <embed
            // src="https://www.tutorialrepublic.com"
            src={
              "https://suretrustplatform.herokuapp.com/" +
              courseDetails.value.syllabus
            }
            width="100%"
            height="500p"
          ></embed>
        </div>
      </div>
    </div>
    // <div>Courses</div>
  );
}

export default CoursesList;
