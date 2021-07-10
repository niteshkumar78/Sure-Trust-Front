import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";

import { SourceURL } from "../apis/allApis";

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
    fetch(`${SourceURL}/courses/get-course-teachers/${ParamsId}/`)
      .then((res) => res.json())
      .then((result) => {
        teachers.setValue(result);
        console.log("teacher", result);
      })
      .catch((err) => console.log("error", err));
  }, [ParamsId]);

  useEffect(() => {
    fetch(`${SourceURL}/courses/get-course/${ParamsId}/`)
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

  return ParamsId !== undefined ? (
    <div className="courseMainContainer" style={{ marginTop: "6rem" }}>
      <div className="d-flex">
        <h1
          className="courseHeading"
          style={{ width: "90%", margin: "2rem auto" }}
        >
          <b>Course Details</b>
        </h1>
      </div>
      <div className="courseContainer">
        {error.value === 1 && (
          <div class="alert alert-warning" role="alert">
            {errorMessage.value}
          </div>
        )}
        {error.value === 2 && (
          <div class="alert alert-success" role="alert">
            {errorMessage.value}
          </div>
        )}
        <h2>
          <b>{courseDetails.value.course_name}</b>
        </h2>
        <div className="courseContainerMain">
          <div>
            <div>
              <h4 style={{ fontWeight: "800", color: "#fff" }}>
                prerequisites:&nbsp;&nbsp;&nbsp;
                <span>{courseDetails.value.prerequisites}</span>
              </h4>
              <a
                href={SourceURL + courseDetails.value.syllabus}
                target="blank"
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginRight: "2rem",
                }}
              >
                Download Curicullum
              </a>
              {loginAs === "student" && (
                <div>
                  <form onSubmit={handleApplyCourse}>
                    <button
                      className="btn btn-success"
                      id="liveToastBtn"
                      style={{ fontWeight: "600" }}
                    >
                      Enroll now
                    </button>
                  </form>
                </div>
              )}
              {loginAs === undefined && (
                <Link
                  className="btn btn-success"
                  to="/login"
                  style={{ fontWeight: "600" }}
                >
                  Enroll now
                </Link>
              )}
              <section className="courseColumn">
                {teachers.value.map((teacher) => {
                  const { id, name, profile_pic, qualification, phone } =
                    teacher;
                  return (
                    <article className="instructorArticle" key={id}>
                      <img
                        src={`${SourceURL}${profile_pic}`}
                        alt=""
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h3>{name}</h3>
                      <p>{qualification}</p>
                      <p>{phone}</p>
                    </article>
                  );
                })}
              </section>
              <div>
                <embed
                  src={SourceURL + courseDetails.value.syllabus}
                  width="100%"
                  height="500p"
                ></embed>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

export default CoursesList;
