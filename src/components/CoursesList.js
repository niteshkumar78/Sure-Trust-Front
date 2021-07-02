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
  const teachers = useInput([]);
  const error = useInput(0);
  const errorMessage = useInput("");
  const ParamsId = props.courseId;
  const loginAs = cookie.load("loginAs");
  console.log("params", ParamsId);

  useEffect(() => {
    fetch(
      `https://suretrustplatform.herokuapp.com/courses/get-course-teachers/${ParamsId}/`
    )
      .then((res) => res.json())
      .then((result) => {
        teachers.setValue(result);
        console.log("teacher", result);
      })
      .catch((err) => console.log("error", err));
  }, [ParamsId]);

  useEffect(() => {
    fetch(
      `https://suretrustplatform.herokuapp.com/courses/get-course/${ParamsId}/`
    )
      .then((res) => res.json())
      .then((result) => {
        courseDetails.setValue(result);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
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
      .then((response) => response.json())
      .then((result) => {
        console.log("Apply Course", result);
        if (result.error !== undefined) {
          error.setValue(1);
          errorMessage.setValue(result.error);
        } else {
          error.setValue(2);
          errorMessage.setValue(result.success);
        }
      })
      .catch((error) => console.log("error", error));
    e.preventDefault();
  };

  console.log("paramss", ParamsId);

  return ParamsId !== undefined ? (
    <div className="courseMainContainer">
      <div className="courseContainer">
        {error.value === 1 && (
          <div className="alert alert-warning" role="alert">
            {errorMessage.value}
          </div>
        )}
        {error.value === 2 && (
          <div className="alert alert-success" role="alert">
            {errorMessage.value}
          </div>
        )}
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
              <section className="courseColumn">
                {teachers.value.map((teacher) => {
                  console.log(teacher);
                  const { id, name, profile_pic, qualification, phone } =
                    teacher;
                  return (
                    <article key={id} style={{ marginTop: "5rem" }}>
                      <img
                        src={`https://suretrustplatform.herokuapp.com${profile_pic}`}
                        alt=""
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h3>
                        Name : <span>{name}</span>
                      </h3>
                      <p>
                        Qualification : <span>{qualification}</span>
                      </p>
                      <p>
                        Phone : <span>{phone}</span>
                      </p>
                    </article>
                  );
                })}
              </section>
            </div>
          </div>
          <div>
            <embed
              src={
                "https://suretrustplatform.herokuapp.com" +
                courseDetails.value.syllabus
              }
              width="100%"
              height="500p"
            ></embed>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

export default CoursesList;
