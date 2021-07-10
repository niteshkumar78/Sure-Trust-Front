import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../KnowMore.css";

const KnowMore = () => {
  return (
    <main style={{ marginTop: "10rem" }}>
      <h2 className="knowMoreHeading">APPROACH FOR COURSE COMPLETION</h2>
      <section className=" container-fluid mid2">
        <div className="box">
          {/* <div id="image_part">
            <img
              src="https://isteam.wsimg.com/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/paper-3033204_1280.jpg/:/rs=w:400,cg:true,m"
              alt=""
            />
          </div> */}
          <div id="content">
            <h3 style={{ fontSize: "1.7rem" }}>
              Mode Of Training :&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#fff" }}>Online</span>
            </h3>
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
            <ul className="gird_justify">
              <li>
                Mode of Training <span>--- &nbsp;&nbsp;&nbsp;Online</span>
              </li>
              <li>
                {" "}
                Period of Training{" "}
                <span>--- &nbsp;&nbsp;&nbsp;Four months</span>
              </li>
              <li>
                Sessions per week <span>--- &nbsp;&nbsp;&nbsp;3 to 6</span>
              </li>
              <li>
                Length of the session{" "}
                <span>--- &nbsp;&nbsp;&nbsp;1 to 2 hours</span>
              </li>
              <li>
                Tests to be taken <span>--- &nbsp;&nbsp;&nbsp;2 per month</span>
              </li>
              <li>
                Assignments <span>--- &nbsp;&nbsp;&nbsp;2 per month</span>
              </li>
              <li>
                Last 15 days{" "}
                <span>
                  --- &nbsp;&nbsp;&nbsp;Preparing the project and course reports
                </span>
              </li>
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
        <a href="#" className="pdf_btn" style={{ fontWeight: "600" }}>
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
    </main>
  );
};

export default KnowMore;
