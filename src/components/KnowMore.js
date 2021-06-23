import React from "react";
import "../KnowMore.css";

const KnowMore = () => {
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
            // style={{font-size:"30px",cursor:"pointer"}}
            className="openNav"
            onclick="openNav()"
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
        </div>
      </section>
      <section className=" container-fluid mid">
        <h2>APPROACH FOR COURSE COMPLETION</h2>

        <div className="box">
          <div id="image_part">
            <img src="sure2.jpg" alt="" />
          </div>
          <div id="content">
            <h3>Mode Of Training : Online</h3>
            <br />
            <br />

            <h3>Eligibility for Enrollment</h3>
            <ul>
              <li>B. Tech completed or pursuing fourth year, any field</li>
              <li>
                MBA or PG in any field with flare for learning computer program
              </li>
              <li>
                Fresh Employees who want to upgrade their skills in the
                technologies offered
              </li>

              <li>
                Company representatives who want to learn the technology and
                develop solutions for the company
              </li>
            </ul>
            <h3>Modalities Of the Courses : </h3>
            <ul>
              <li>Mode of Training --- Online </li>
              <li> Period of Training --- Four months</li>
              <li>Sessions per week --- 3 to 6 </li>
              <li>Length of the session --- 1 to 2 hours</li>
              <li>Tests to be taken --- 2 per month</li>
              <li>Assignments --- 2 per month</li>
              <li>Last 15 days --- Preparing the project and course reports</li>
            </ul>
            <h3>Periods of Training: </h3>
            <ul>
              <li>Four months</li>
            </ul>
            <h3>Cerifications:</h3>
            <ul>
              <li>
                Certificate will be issued on successful completion of the
                training.
              </li>
            </ul>
            <h3>Uniqueness Of the Course:</h3>
            <ul>
              <li>
                One on One className to ensure that all the students understand
                the subject{" "}
              </li>
              <li>
                Course Learning Report prepared by each student to show case the
                creative part of the exercises worked, innovative content
                developed that will exhibit the perseverance of the student and
                the patience of the trainer
              </li>
              <li>
                Project report covers the procedure followed and the research
                outcome of the live project handled by each student in each
                course
              </li>
              <li>
                {" "}
                Commitment, sincerity and hard-work from the trainees, are much
                appreciated.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="initiative">
        <h2>SURE INITIATIVE BROCHURE</h2>
        <a href="#" className="pdf_btn">
          Download PDF <i className="fas fa-angle-right"></i>
        </a>
        <div
          id="demo"
          className="carousel slide mycarousel"
          data-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
          </ul>
          {/* <!-- The slideshow --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="sureA.png" alt="" />
            </div>
            <div className="carousel-item">
              <img src="sureb.png" alt="Chicago" />
            </div>
            <div className="carousel-item">
              <img src="sure3.png" alt="New York" />
            </div>
            <div className="carousel-item">
              <img src="sure4.png" alt="New York" />
            </div>
            <div className="carousel-item">
              <img src="sure5.png" alt="New York" />
            </div>
            <div className="carousel-item">
              <img src="sur6.png" alt="New York" />
            </div>
          </div>
          {/* <!-- Left and right controls --> */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default KnowMore;
