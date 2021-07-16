import React, { useEffect } from "react";
import "../Home.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import data, { developers_Details, motive } from "../data";
import redapricot from "../images/apricot.jpeg";
import birthvenue from "../images/birthvenue.jpg";
import grey from "../images/grey.jpeg";
import lokibots from "../images/lokibots.jpg";
import expect from "../images/expect.jpg";
import vinicullum from "../images/vinculum.jpeg";
import atsuya from "../images/atsuya.jpeg";
import { useState } from "react";

const Home = () => {
  const [circle, setCircle] = useState(0);
  function slide(x) {
    setCircle(x - 1);
    var len = window.innerWidth * 0.8;
    if (window.innerWidth >= 768) {
      len = 800;
    }
    var slide = document.querySelector(".dev_row");
    slide.style.transform = `translateX(-${(x - 1) * len}px)`;
  }

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <main>
      {/* <!-- 1st page-->	 */}
      <div className="container" style={{ margin: "8rem auto 1rem auto" }}>
        <div className="row">
          <div className="col-md-12  text-center">
            <h1 className="welcomeHeading stagger1">
              Welcome to SURE Initiative
            </h1>
          </div>
          <div className="col-md-12 text-center">
            {" "}
            <p className="welcomeParagraph stagger1">
              {" "}
              "Work hard today for a better tomorrow"
            </p>
          </div>
        </div>
      </div>
      <br />

      {/* <!-- 2nd page--> */}
      <section className="whySureSection" style={{ color: "#fff" }}>
        <div className="container-fluid transition">
          {motive.map((x) => {
            const { id, src, title, content } = x;
            if (id % 2 != 0) {
              return (
                <>
                  <div
                    className="row align-items-center px-5 py-4 transition2"
                    key={id}
                  >
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <img src={src} alt={title} className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <h1 className="leftHeading">{title}</h1>
                      <p className="Homeparagraph">{content}</p>
                    </div>
                  </div>
                  <br />
                </>
              );
            } else {
              return (
                <>
                  <div
                    className="row align-items-center px-5 py-4 flex-row-reverse transition2"
                    key={id}
                  >
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <img src={src} alt={title} className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <h1 className="rightHeading">{title}</h1>
                      <p className="Homeparagraph">{content}</p>
                    </div>
                  </div>
                  <br />
                </>
              );
            }
          })}
        </div>
      </section>

      {/* <!-- 3rd page--> */}

      <div className="card text-center purely">
        <div className="card-body">
          <h5 className="card-title serviceOriented">
            PURELY A SERVICE - ORIENTED INITIATIVE.
            <br />
            FREE TRAINING FOR ENROLLED RURAL YOUTH.
          </h5>
          <a href="#" className="btn-lg learnMore">
            LEARN MORE
          </a>
        </div>
      </div>

      <div
        class="elfsight-app-24275791-8baa-4f85-be52-dee774f2672e"
        // style={{ width: "80%", height: "00px" }}
      ></div>

      {/* <!-- 4th page-->  */}

      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-lg-6 col-md-6 col-12">
            <img className="img-fluid" src={expect} />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <p className="advisorContent">
              <b style={{ fontWeight: "800" }}> WHAT TO EXPECT ?</b>
              <br /> With SURE INITIATIVE be sure of upgrading your skills to
              meet the ever changing demands of economic and industry scenario.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- 5th page-->  */}

      <section className="popup">
        <div className="container">
          <h1>ACCOMPLISHMENTS</h1>
        </div>
        <div className="container">
          <div className="row popup_row">
            <div
              className="col p-4"
              style={{
                zIndex: 1,
                background: "#fff",
                borderRadius: "0.5rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              <h1 className="youth">
                <br />
                YOUTH UNDERGOING TRAINING - 350 PER DAY IN 20 PARALLEL COURSES{" "}
              </h1>
              <br />
              <p>
                "Number of rural youth educated & certified to date: 48 Number
                of courses offered: 25 Number of faculty: 28. Number of
                internships & jobs obtained after the training: Internships- 3
                in ML and 3 in Blockchain Technology Jobs Obtained: 7.
              </p>
            </div>
            <div
              className="col p-4"
              style={{
                zIndex: 1,
                background: "#fff",
                borderRadius: "0.5rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              <h1 className="youth">
                <br />
                IMPACT OF THE INITIATIVE
              </h1>
              <p>
                <br />
                The impact of the initiative can be gauged from the progress
                made within a short span of 8 months in-terms of increasing in
                the number of beneficiaries, increase in the well qualified
                trainers besides pouring in advisory and other support.
                Beginning with three students, the initiative currently embraces
                more than hundred students, spread
              </p>
            </div>
            <div
              className="col  p-4"
              style={{
                zIndex: 1,
                borderRadius: "0.5rem",
                background: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              <h1 className="youth">
                <br />
                TEAM AT THE SURE INITIATIVE
              </h1>
              <p>
                <br />
                The SURE INITIATIVE team works sincerely and with dedication in
                order to get the required training to the door step of hither to
                deprived youth. The team is determined to work in unison for
                providing free employability enhancement skills to educated
                unemployed rural youth and other underprivileged youth.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />

      <div className="container">
        <h1
          style={{
            fontSize: "2rem",
            marginTop: "2rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          UNIQUENESS OF OUR TRAINING
        </h1>
      </div>
      <div className="container" style={{ color: "white" }}>
        <div className="row justify-content-evenly uniqueness">
          <div className="col" style={{ position: "relative", zIndex: "1000" }}>
            <svg
              width="653"
              height="273"
              viewBox="0 0 653 273"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrowSvg svg1"
              style={{ position: "absolute", top: "-20%", zIndex: "-1" }}
            >
              <path d="M647.108 128.112C653.397 131.506 653.412 140.522 647.135 143.937L413.153 271.246C407.162 274.506 399.864 270.176 399.852 263.356L399.424 9.52737C399.413 2.7067 406.697 -1.6474 412.699 1.59221L647.108 128.112Z" />
              <rect y="32" width="400" height="200" />
            </svg>

            <h1>
              <br />
              Entrepreneurship Mandatory training
            </h1>
            <br />
            <p>
              Number of rural youth educated & certified to date: 48. An
              alternative channel for source of employment.{" "}
            </p>
          </div>
          <div
            className="col  p-3 mandatory"
            style={{ position: "relative", zIndex: "1000" }}
          >
            <svg
              width="653"
              height="273"
              viewBox="0 0 653 273"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrowSvg svg2"
              style={{ position: "absolute", top: "-20%", zIndex: "-1" }}
            >
              <path d="M5.8741 144.118C-0.402558 140.703 -0.386832 131.686 5.90171 128.293L240.321 1.78718C246.323 -1.45206 253.607 2.90249 253.595 9.72316L253.152 263.552C253.14 270.372 245.841 274.701 239.85 271.441L5.8741 144.118Z" />
              <rect x="253" y="32" width="400" height="200" />
            </svg>

            <h1>
              <br /> Mandatory training in Education in Human Values
            </h1>
            <p>
              EHV sessions contribute to developing students integrated
              personality
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h1
          style={{
            fontSize: "2.2rem",
            marginTop: "3rem",
            marginBottom: "1rem",
            fontWeight: "600",
            marginLeft: "2rem",
            paddingLeft: "1rem",
          }}
        >
          SURE INITIATIVE COLLABORATORS
        </h1>
      </div>

      <div className="card-group companies" style={{ color: "white" }}>
        <div className="card p-3 bottomRight transition1">
          <h1>Lokibots Inc.</h1>

          <img
            src={lokibots}
            alt="Error404"
            style={{ width: "60%", height: "100px", marginLeft: "1rem" }}
          />
          <div className="card-body">
            <p>
              LokiBots is an information technology company that specializes in
              the fields of artificial intelligence, robotic process automation,
              SaaS, and cloud computing. It helps business users to easily
              capture end to end process models and define
              dependencies/sequencing in them. Lokibots is a California based
              company offers Auto RPA services to companies. Lokibots team
              trains students in RPA at SURE Initiative.
            </p>
          </div>
        </div>

        <div className="card p-3 bottomLeft transition1">
          <h1>Grey Scientific Labs</h1>

          <img
            src={grey}
            alt="Error404"
            style={{ width: "100px", height: "150px", marginLeft: "2rem" }}
          />
          <div className="card-body">
            <p>
              {" "}
              Grey Scientific Labs is a non-profit organization who's core
              values revolve around enabling Entrepreneurs with Intellectual
              Properties. We develop Intellectual Properties either by ourselves
              or by collaborating with Universities in India and Abroad.
            </p>
          </div>
        </div>
      </div>

      <div className="card-group companies" style={{ color: "white" }}>
        <div className="card  p-3 topRight bottomRight transition1">
          <h1>Atsuya Technologies</h1>

          <img
            src={atsuya}
            alt="Error404"
            style={{ width: "60%", height: "100px", marginLeft: "1rem" }}
          />
          <div className="card-body">
            <p>
              {" "}
              Atsuya Technologies has been founded by a group of experienced
              software and hardware engineers, and marketers. Our team comprises
              US patent-winning software and hardware engineers, who have helped
              design and implement IoT solutions for some of the world’s largest
              corporations. With experience spanning a wide range of industries
              and technologies, our team is able to help clients assimilate
              learning from across sectors to put in place not best practices,
              but next practices.
            </p>
          </div>
        </div>{" "}
        <div className="card  p-3 bottomLeft topLeft transition1">
          <h1>Vincullum</h1>

          <img
            src={vinicullum}
            alt="Error404"
            style={{ width: "60%", height: "100px", marginLeft: "1rem" }}
          />
          <div className="card-body">
            <p>
              {" "}
              <br />
              <br />
              We are a global software company enabling Omnichannel retailing.
              <br />
              We help brands and retailers to easily scale, reach and delight
              customers across channels globally.
            </p>
          </div>
        </div>
      </div>
      <div className="card-group companies" style={{ color: "white" }}>
        <div className="card  p-3 topRight transition1">
          <h1>BirthVenue</h1>

          <img
            src={birthvenue}
            alt="Error404"
            style={{ width: "60%", height: "100px", marginLeft: "1rem" }}
          />
          <div className="card-body">
            <p>
              {" "}
              Birthvenue Growth Solutions Private Limited is a Private
              incorporated on 12 September 2018. It is classNameified as
              Non-govt company. Birthvenue is a blockchain-as-a-service provider
              and assists management teams in understanding the fundamentals of
              blockchain technology by creating industry-specific case studies
              as references to use cases.
            </p>
          </div>
        </div>

        <div className="card  p-3 topLeft transition1">
          <h1>Red Apricot</h1>

          <img
            src={redapricot}
            alt="Error404"
            style={{ width: "60%", height: "100px" }}
          />
          <div className="card-body">
            <p>
              {" "}
              Red Apricot is a burgeoning company in the EPM space and an SAP
              Silver Partner. It inspires businesses to transform their
              Enterprise Performance Management processes via an innovative
              technology-enabled solution methodology.
            </p>
          </div>
        </div>
      </div>

      {/* //developers section */}
      <section
        style={{
          minHeight: "550px",
          margin: "3rem 0",
          padding: "2rem 0",
        }}
      >
        <h3 className="dev_head">Sure Trust Website Building Team</h3>
        <section className="dev_section">
          <div className="dev_indicators">
            {developers_Details.map((x) => {
              return (
                <span
                  className={`circleIndicator ${
                    circle == x.id - 1 && "circleActive"
                  }`}
                  key={x.id}
                  onClick={() => slide(x.id)}
                ></span>
              );
            })}
          </div>
          <div className="developers">
            <div className="dev_row">
              {developers_Details.map((x) => {
                const { id, src, name, degree, contribution, link } = x;
                return (
                  <div className="dev_col" key={id}>
                    <article className="dev_text">
                      <h4>{name}</h4>
                      <p style={{ marginBottom: "1rem" }}>{degree}</p>
                      <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
                        {contribution}
                      </p>
                      <a href={link} target="blank">
                        Linkedin
                      </a>
                    </article>
                    <div className="dev_img">
                      <img src={src} alt={name} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
      <div className="container">
        <h1
          style={{
            marginBottom: "2rem",
            marginTop: "3rem",
          }}
        >
          PHOTO GALLERY
        </h1>
        <Carousel>
          {data.map((x) => {
            const { id, src } = x;
            return (
              <Carousel.Item key={id}>
                <img src={src} alt="" width="90vw" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
