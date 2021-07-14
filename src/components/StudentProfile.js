import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

import { Loader } from "./index";
import { StudentDetailsApi } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function StudentProfile(props) {
  const studentDetails = useInput({});
  const loader = useInput(true);
  const Edit = useInput(false);
  const editPhone = useInput();
  console.log(editPhone.value);
  const editLoader = useInput(false);

  const regno = cookie.load("regno");
  // const regno = localStorage.getItem("regno");

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
        studentDetails.setValue(result);
        editPhone.setValue(result.phone);
        console.log("student Details", result);
        loader.setValue(false);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
  }, []);

  function handleEditSave(e) {
    editLoader.setValue(true);
    var requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registration_no: studentDetails.value.registration_no,
        name: studentDetails.value.name,
        qualification: studentDetails.value.qualification,
        phone: editPhone.value,
      }),
      redirect: "follow",
    };

    fetch(`${StudentDetailsApi}${regno}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        studentDetails.setValue(result);
        editPhone.setValue(result.phone);

        console.log("Edit student Details", result);
        Edit.setValue(false);
        editLoader.setValue(false);
      })
      .catch((error) => {
        editLoader.setValue(false);
        console.log("error", error);
      });
    e.preventDefault();
  }

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
                            src={studentDetails.value.profile_pic}
                            alt="Maxwell Admin"
                          />
                        </div>

                        <h5 className="user-name">
                          {studentDetails.value.name}
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
                            &nbsp;&nbsp;&nbsp;{studentDetails.value.name}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="gender">
                            <b>Gender :</b>
                          </span>
                          <span>
                            &nbsp;&nbsp;&nbsp;{studentDetails.value.gender}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="phone">
                            <b>Phone :</b>
                          </span>
                          {Edit.value ? (
                            <span>
                              &nbsp;&nbsp;&nbsp;
                              <input
                                type="number"
                                value={editPhone.value}
                                onChange={(e) => {
                                  editPhone.setValue(e.target.value);
                                }}
                              />
                            </span>
                          ) : (
                            <span>
                              &nbsp;&nbsp;&nbsp;{studentDetails.value.phone}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="fullName">
                            <b>Email :</b>
                          </span>
                          <span>
                            &nbsp;&nbsp;&nbsp;
                            {studentDetails.value.user.email}
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <span htmlFor="fullName">
                            <b>Registration No.: </b>
                          </span>
                          <span>
                            &nbsp;&nbsp;&nbsp;
                            {studentDetails.value.registration_no}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          {Edit.value ? (
                            <span>
                              {editLoader.value ? (
                                <button
                                  type="submit"
                                  className="btn btn-secondary "
                                  disabled
                                >
                                  Updating...&nbsp;;
                                  <div
                                    className="spinner-border text-dark"
                                    role="status"
                                    style={{ height: "5px" }}
                                  >
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                </button>
                              ) : (
                                <button
                                  className="btn btn-primary"
                                  onClick={handleEditSave}
                                  style={{ width: "150px" }}
                                >
                                  Save
                                </button>
                              )}
                            </span>
                          ) : (
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                Edit.setValue(true);
                              }}
                            >
                              Edit
                            </button>
                          )}
                          <Link
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-primary"
                            style={{ marginLeft: "10px" }}
                            to="/student"
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
    // <div>Profile</div>
  );
}

export default StudentProfile;
