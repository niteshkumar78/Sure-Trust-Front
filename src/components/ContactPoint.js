/*eslint-disable*/

import React, { useState, useEffect } from "react";
import "../ContactPoint.css";
import cookie from "react-cookies";

import { SourceURL } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

const ContactPoint = () => {
  const subject = useInput("");
  const description = useInput("");
  const submitResponse = useInput();
  const SubmitMessage = useInput("");
  const SubmitButtonLoader = useInput(false);

  function handleFormSubmit(e) {
    SubmitButtonLoader.setValue(true);
    var raw = JSON.stringify({
      subject: subject.value,
      description: description.value,
      student: cookie.load("regno"),
    });

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    fetch(`${SourceURL}/student/contactus/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.error !== undefined) {
          submitResponse.setValue(1);
          SubmitMessage.setValue(result.error);
        } else {
          submitResponse.setValue(2);
          SubmitMessage.setValue(result.success);
        }
        console.log(result);
        setTimeout(() => {
          SubmitButtonLoader.setValue(false);
        }, 1000);
      })
      .catch((error) => {
        SubmitButtonLoader.setValue(false);
        console.log("error", error);
      });

    e.preventDefault();
  }

  return (
    <>
      <section
        className=" container-fluid mid1"
        style={{ paddingTop: "3rem", marginTop: "6rem", minHeight: "80.5vh" }}
      >
        <div className="boxKnowMore">
          <div className="row rowContact">
            {submitResponse.value === 1 && (
              <div class="alert alert-warning" role="alert">
                {SubmitMessage.value}
              </div>
            )}
            {submitResponse.value === 2 && (
              <div class="alert alert-success" role="alert">
                {SubmitMessage.value}
              </div>
            )}
            <h2 style={{ fontWeight: "800", marginBottom: "2rem" }}>
              CONTACT THE TEAM
            </h2>

            <div style={{ display: "flex" }}>
              {cookie.load("loginAs") == "student" && (
                <div
                  style={{
                    // width: "%",
                    // margin: "0 auto",
                    width: "200%",
                    border: "1px solid #f7f5f5",
                    padding: "15px",
                  }}
                >
                  <h1 style={{ textAlign: "center" }}>Contact Us</h1>
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        <b>Subject</b>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Subject"
                        name="subject"
                        value={subject.value}
                        onChange={(e) => subject.setValue(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        <b>Description</b>
                      </label>
                      <textarea
                        rows="5"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Add content"
                        name="description"
                        value={description.value}
                        onChange={(e) => description.setValue(e.target.value)}
                        required
                      />
                    </div>
                    {SubmitButtonLoader.value ? (
                      <button
                        type="submit"
                        className="btn btn-secondary  "
                        disabled
                      >
                        Submitting...&nbsp;&nbsp;&nbsp;&nbsp;
                        <div
                          className="spinner-border text-dark"
                          role="status"
                          style={{ height: "10px", width: "10px" }}
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    )}
                  </form>
                </div>
              )}
              <div className="column columnContact">
                <div className="block">
                  <h4 className="find" style={{ fontWeight: "600" }}>
                    Find ways to volunteer ----
                  </h4>
                  <div className="ContentText">
                    <p
                      style={{
                        margin: "0",
                        padding: "0",
                        textAlign: "justify",
                      }}
                    >
                      <span className="Cont">
                        Any initiative is as strong as the community that holds
                        it up. Together we can do more than what we can do
                        alone. Let us bring all our abilities and strengths
                        together to effect real change in the rural areas by
                        targeting the educated unemployed youth. This initiative
                        is visualized to bridge the inequality in employability
                        among the educated youth in &nbsp;rural and urban
                        areas.&nbsp;There are plenty of volunteering
                        opportunities in the initiative.&nbsp;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="block">
                  <a
                    rel="noopener"
                    data-ux-btn="external"
                    data-ux="ButtonExternal"
                    href="https://wa.me/919440045717"
                    target="_blank"
                    data-aid="CONTACT_INFO_WHATS_APP_REND"
                    data-tccl="ux2.contact.whatsapp.click,click"
                    icon="whatsApp"
                    data-typography="false"
                    className="messageContact"
                  >
                    <span className="MsgElement">
                      <span className="Msg2Element">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          data-ux="Icon"
                          className="Svgview"
                        >
                          <svg viewBox="0 0 496 497">
                            <defs>
                              <linearGradient
                                id="a"
                                x1="247.32"
                                x2="247.32"
                                y1="446.09"
                                y2="39.9"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stopColor="#20b038"></stop>
                                <stop offset="1" stopColor="#60d66a"></stop>
                              </linearGradient>
                              <linearGradient
                                id="b"
                                x1="247.32"
                                x2="247.32"
                                y1="453.37"
                                y2="32.61"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stopColor="#f9f9f9"></stop>
                                <stop offset="1" stopColor="#fff"></stop>
                              </linearGradient>
                            </defs>
                            <path d="M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z"></path>
                            <path
                              fill="url(#a)"
                              d="M45.13 446.09l28.57-104.3a200.82 200.82 0 0 1-26.88-100.62c0-111 90.36-201.27 201.34-201.27A201.35 201.35 0 0 1 449.5 241.32c0 111-90.37 201.28-201.33 201.28h-.09a201.31 201.31 0 0 1-96.21-24.49z"
                            ></path>
                            <path
                              fill="url(#b)"
                              d="M37.88 453.37l29.59-108A208 208 0 0 1 39.63 241.1c0-115 93.6-208.49 208.56-208.49a208.57 208.57 0 0 1 208.57 208.66c-.05 115-93.62 208.49-208.57 208.49h-.08a208.41 208.41 0 0 1-99.67-25.38zm115.68-66.73l6.34 3.75a173.18 173.18 0 0 0 88.23 24.16h.06c95.55 0 173.31-77.75 173.35-173.3A173.34 173.34 0 0 0 248.26 67.83c-95.62 0-173.38 77.73-173.42 173.28a172.94 172.94 0 0 0 26.5 92.23l4.13 6.55L88 403.84z"
                            ></path>
                            <path
                              fill="#fff"
                              d="M196.07 153.94c-3.91-8.68-8-8.85-11.73-9-3-.14-6.51-.13-10-.13a19.15 19.15 0 0 0-13.89 6.52c-4.78 5.22-18.24 17.82-18.24 43.46s18.67 50.42 21.28 53.9 36.05 57.77 89 78.66c44 17.36 53 13.91 62.53 13s30.83-12.61 35.18-24.78 4.34-22.59 3-24.77-4.78-3.48-10-6.08-30.83-15.22-35.61-16.95-8.25-2.61-11.73 2.61-13.45 16.94-16.5 20.42-6.08 3.92-11.29 1.31-22-8.11-41.9-25.86c-15.5-13.82-26-30.87-29-36.09s-.32-8 2.29-10.63c2.34-2.34 5.21-6.09 7.82-9.13s3.47-5.21 5.21-8.69.87-6.52-.44-9.13-11.35-28.34-15.98-38.64z"
                            ></path>
                          </svg>
                        </svg>
                      </span>
                      <span className="Msg3Element">
                        Message us on WhatsApp
                      </span>
                    </span>
                  </a>
                  <h4
                    role="heading"
                    aria-level="4"
                    data-ux="ContentHeading"
                    data-aid="CONTACT_INFO_BIZ_NAME_REND"
                    data-typography="HeadingDelta"
                    className="x-el x-el-h4 c1-8c c1-2 c1-1p c1-1q c1-8d c1-24 c1-25 c1-1s c1-83 c1-b c1-5o c1-7g c1-1w c1-7i c1-7k c1-7l c1-7m"
                  >
                    THE SURE INITIATIVE TEAM
                  </h4>
                  <p
                    data-ux="ContentText"
                    data-typography="BodyAlpha"
                    className="x-el x-el-p c1-1 c1-2 c1-1p c1-1q c1-1r c1-1s c1-83 c1-b9 c1-b c1-5d c1-c c1-1w c1-a9 c1-aa c1-ab c1-d c1-e c1-f c1-g"
                  >
                    <a
                      rel=""
                      role="link"
                      aria-haspopup="false"
                      data-ux="Link"
                      data-aid="CONTACT_INFO_PHONE_REND"
                      href="tel:9440045717"
                      data-typography="LinkAlpha"
                      className="x-el x-el-a c1-2x c1-2y c1-2z c1-1p c1-1q c1-30 c1-31 c1-b c1-84 c1-c c1-38 c1-ba c1-bb c1-d c1-e c1-f c1-g"
                      data-tccl="ux2.CONTACT.contact1.Content.Default.Link.Default.18555.click,click"
                    >
                      9440045717
                    </a>
                    ,&nbsp;
                    <a
                      rel=""
                      role="link"
                      aria-haspopup="false"
                      data-ux="Link"
                      data-aid="CONTACT_INFO_PHONE_REND"
                      href="tel:8309228027"
                      data-typography="LinkAlpha"
                      className="x-el x-el-a c1-2x c1-2y c1-2z c1-1p c1-1q c1-30 c1-31 c1-b c1-84 c1-c c1-38 c1-ba c1-bb c1-d c1-e c1-f c1-g"
                      data-tccl="ux2.CONTACT.contact1.Content.Default.Link.Default.18556.click,click"
                    >
                      8309228027
                    </a>
                    ,&nbsp;
                    <a
                      rel=""
                      role="link"
                      aria-haspopup="false"
                      data-ux="Link"
                      data-aid="CONTACT_INFO_EMAIL_REND"
                      href="mailto:suretrust2020@gmail.com"
                      data-typography="LinkAlpha"
                      className="x-el x-el-a c1-2x c1-2y c1-2z c1-1p c1-1q c1-30 c1-31 c1-b c1-84 c1-c c1-38 c1-ba c1-bb c1-d c1-e c1-f c1-g"
                      data-tccl="ux2.CONTACT.contact1.Content.Default.Link.Default.18557.click,click"
                    >
                      suretrust2020@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPoint;
