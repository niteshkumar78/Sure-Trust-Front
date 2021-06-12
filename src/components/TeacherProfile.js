import React, { useEffect, useState, useContext } from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

import { TeacherDetailsApi } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function TeacherProfile(props) {
  const teacherDetails = useInput({});
  const loader = useInput(false);

  console.log("state ", teacherDetails);
  useEffect(() => {
    loader.setValue(true);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch(TeacherDetailsApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);
        teacherDetails.setValue(result);
        console.log("teacher", result);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
  }, []);

  console.log(cookie.load("teacherId"));

  return (
    <div>
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
        <div className="main">
          <div className="container">
            <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="account-settings">
                      <div className="user-profile">
                        <div className="user-avatar">
                          <img
                            src={teacherDetails.value.profice_pic}
                            alt="Maxwell Admin"
                          />
                        </div>
                        <h5 className="user-name">
                          {teacherDetails.value.name}
                        </h5>
                        {/* <h6 className="user-email">yuki@Maxwell.com</h6> */}
                      </div>
                      <div className="about">
                        {/* <h5>About</h5>
                    <p>
                      I'm Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="fullName">
                            <b>Full Name :</b>
                          </span>
                          <span>
                            &nbsp;&nbsp;&nbsp;{teacherDetails.value.name}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="gender">
                            <b>Gender :</b>
                          </span>
                          <span>
                            &nbsp;&nbsp;&nbsp;{teacherDetails.value.gender}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="phone">
                            <b>Phone :</b>
                          </span>
                          <span>
                            &nbsp;&nbsp;&nbsp;{teacherDetails.value.phone}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="fullName">
                            <b>Qualification :</b>
                          </span>
                          <span>
                            &nbsp;&nbsp;&nbsp;
                            {teacherDetails.value.qualification}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <Link
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-primary"
                            to="/teacher"
                          >
                            Go To Dashobard
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherProfile;