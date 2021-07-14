import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

import { TeacherDetailsApi } from "../apis/allApis";

import { Loader } from "./index";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function TeacherProfile(props) {
  const teacherDetails = useInput({});
  const loader = useInput(true);

  console.log("state ", teacherDetails);
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
        loader.setValue(false);
        console.log("teacher", result);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
  }, []);

  console.log(cookie.load("userId"));

  return (
    <div>
      <div className="main" style={{ marginTop: "7rem", height: "70vh" }}>
        {loader.value ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="account-settings">
                      <div className="user-profile">
                        <div className="user-avatar">
                          <img
                            src={teacherDetails.value.profile_pic}
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
        )}
      </div>
    </div>
  );
}

export default TeacherProfile;
