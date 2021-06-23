import React from "react";
import "../ContactPoint.css";

const ContactPoint = () => {
  return (
    <>
      <section>
        <div className="container-fluid logo_part">
          <div id="myNav" className="overlay">
            <a
              href="javascript:void(0)"
              className="closebtn "
              onclick="closeNav()"
            >
              <i className="fas fa-bars menu_bar"></i>
            </a>
            <ul className="nav flex-column small_nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  COURSE OFFERED
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    1. ROBOTICS
                  </a>
                  <a className="dropdown-item" href="#">
                    2. INTERNET OF THINGS
                  </a>
                  <a className="dropdown-item" href="#">
                    3. CYBER SECURITY AND HACKING
                  </a>
                  <a className="dropdown-item" href="#">
                    4. CLOUD COMPUTING
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  KNOW MORE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESEARCH AND GUIDANCE
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  MORE
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    ABOUT SURE INITIATIVE
                  </a>
                  <a className="dropdown-item" href="#">
                    STUDENT CORNER
                  </a>
                  <a className="dropdown-item" href="#">
                    VOLUNTEER TO BE TRAINER?
                  </a>
                  <a className="dropdown-item" href="#">
                    CONTACT POINT
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <span
            // style="font-size:30px;cursor:pointer"
            className="openNav"
            // onclick={openNav()}
          >
            &#9776;{" "}
          </span>
          <div id="logo">
            <img src="logo.png" alt="" />
          </div>

          <hr />
          <hr />
          <nav className="mynav ">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  COURSE OFFERED
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    1. ROBOTICS
                  </a>
                  <a className="dropdown-item" href="#">
                    2. INTERNET OF THINGS
                  </a>
                  <a className="dropdown-item" href="#">
                    3. CYBER SECURITY AND HACKING
                  </a>
                  <a className="dropdown-item" href="#">
                    4. CLOUD COMPUTING
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  KNOW MORE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESEARCH AND GUIDANCE
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  MORE
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    ABOUT SURE INITIATIVE
                  </a>
                  <a className="dropdown-item" href="#">
                    STUDENT CORNER
                  </a>
                  <a className="dropdown-item" href="#">
                    VOLUNTEER TO BE TRAINER?
                  </a>
                  <a className="dropdown-item" href="#">
                    CONTACT POINT
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <hr
            aria-hidden="true"
            role="separator"
            data-ux="HR"
            className="separation"
          />
        </div>
      </section>
      <section className=" container-fluid mid">
        <h2>CONTACT THE TEAM</h2>
        <div className="box">
          <div className="row">
            <div className="column">
              <div>
                <form aria-live="polite" data-ux="Form">
                  <input type="name" name="name" />
                </form>
              </div>
            </div>
            <div className="column">
              <div className="block">
                <h4 className="find">Find ways to volunteer ----</h4>
                <div className="ContentText">
                  <p
                  // style="margin: 0"
                  >
                    <span className="Cont">
                      Any initiative is as strong as the community that holds it
                      up. Together we can do more than what we can do alone. Let
                      us bring all our abilities and strengths together to
                      effect real change in the rural areas by targeting the
                      educated unemployed youth. This initiative is visualized
                      to bridge the inequality in employability among the
                      educated youth in &nbsp;rural and urban areas. &nbsp;There
                      are plenty of volunteering opportunities in the
                      initiative.&nbsp;
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
                  className="message"
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
                              <stop offset="0" stop-color="#20b038"></stop>
                              <stop offset="1" stop-color="#60d66a"></stop>
                            </linearGradient>
                            <linearGradient
                              id="b"
                              x1="247.32"
                              x2="247.32"
                              y1="453.37"
                              y2="32.61"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#f9f9f9"></stop>
                              <stop offset="1" stop-color="#fff"></stop>
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
                    <span className="Msg3Element">Message us on WhatsApp</span>
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
                  ,{" "}
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
      </section>
    </>
  );
};

export default ContactPoint;
