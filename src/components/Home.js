/*eslint-disable*/

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
import Actrazenica from "../images/Astrazenica.jpeg";
import CheckIn from "../images/CheckIn.jpeg";

import { useState } from "react";

const Home = () => {
  const [circle, setCircle] = useState(0);
  console.log(circle, "1");
  function slide(x) {
    if (x < 1) {
      setCircle(developers_Details.length);
    } else {
      setCircle(x - 1);
    }
    var len = window.innerWidth * 0.8;
    if (window.innerWidth >= 768) {
      len = 800;
    }
    var slide = document.querySelector(".dev_row");
    slide.style.transform = `translateX(-${(x - 1) * len}px)`;
  }

  function slidenext(x) {
    if (x > developers_Details.length - 2) {
      setCircle(-1);
    } else {
      setCircle(x + 1);
    }
    var len = window.innerWidth * 0.8;
    if (window.innerWidth >= 768) {
      len = 800;
    }
    var slide = document.querySelector(".dev_row");
    slide.style.transform = `translateX(-${(x + 1) * len}px)`;
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
      <section className="scrollSection" style={{ marginTop: "7rem" }}>
        <marquee scrollamount="10" direction="left" className="scrollMessages">
          <svg
            data-ux="SVG"
            viewBox=" 0 0 35 35"
            dataaids="SEASONAL_WINTER_LEFT_ICON_RENDERED"
            className="svgcls"
          >
            <g stroke="currentColor" fill="none" fillRule="evenodd">
              <path d="M16.724 10.726l4.651 5.349M12.03 16.408L16.8 21.8M16.8 1.8v28M30.8 16.3h-28M15.8 1.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM30.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM1.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM15.8 30.8a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM23.05 10.05l-12.5 12.5M22.6 9.3a1 1 0 1 1 1.999-.002A1 1 0 0 1 22.6 9.3zM8.8 23.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM16.99 5.545l10.02 10.961M17 27.3l-10.7-11M27.01 16.131l-10.02 10.96M6.59 17.091l10.02-10.96M22.925 22.086L10.688 9.328M22.459 22.826a1 1 0 1 0 2 .043 1 1 0 0 0-2-.043zM8.953 8.542a1.001 1.001 0 1 0 2.002.04 1.001 1.001 0 0 0-2.002-.04z"></path>
            </g>
          </svg>
          <p>Do a course and Secure an Internship or a Job</p>
          <svg
            data-ux="SVG"
            viewBox=" 0 0 35 35"
            dataaids="SEASONAL_WINTER_LEFT_ICON_RENDERED"
            className="svgcls"
          >
            <g stroke="currentColor" fill="none" fillRule="evenodd">
              <path d="M16.724 10.726l4.651 5.349M12.03 16.408L16.8 21.8M16.8 1.8v28M30.8 16.3h-28M15.8 1.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM30.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM1.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM15.8 30.8a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM23.05 10.05l-12.5 12.5M22.6 9.3a1 1 0 1 1 1.999-.002A1 1 0 0 1 22.6 9.3zM8.8 23.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM16.99 5.545l10.02 10.961M17 27.3l-10.7-11M27.01 16.131l-10.02 10.96M6.59 17.091l10.02-10.96M22.925 22.086L10.688 9.328M22.459 22.826a1 1 0 1 0 2 .043 1 1 0 0 0-2-.043zM8.953 8.542a1.001 1.001 0 1 0 2.002.04 1.001 1.001 0 0 0-2.002-.04z"></path>
            </g>
          </svg>
          <p>Bring an innovative business idea and become an entrepreneur</p>

          <svg
            data-ux="SVG"
            viewBox=" 0 0 35 35"
            dataaids="SEASONAL_WINTER_LEFT_ICON_RENDERED"
            className="svgcls"
          >
            <g stroke="currentColor" fill="none" fillRule="evenodd">
              <path d="M16.724 10.726l4.651 5.349M12.03 16.408L16.8 21.8M16.8 1.8v28M30.8 16.3h-28M15.8 1.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM30.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM1.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM15.8 30.8a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM23.05 10.05l-12.5 12.5M22.6 9.3a1 1 0 1 1 1.999-.002A1 1 0 0 1 22.6 9.3zM8.8 23.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM16.99 5.545l10.02 10.961M17 27.3l-10.7-11M27.01 16.131l-10.02 10.96M6.59 17.091l10.02-10.96M22.925 22.086L10.688 9.328M22.459 22.826a1 1 0 1 0 2 .043 1 1 0 0 0-2-.043zM8.953 8.542a1.001 1.001 0 1 0 2.002.04 1.001 1.001 0 0 0-2.002-.04z"></path>
            </g>
          </svg>
          <p>Support a student or a trainer and avail 80G benefit</p>
          <svg
            data-ux="SVG"
            viewBox=" 0 0 35 35"
            dataaids="SEASONAL_WINTER_LEFT_ICON_RENDERED"
            className="svgcls"
          >
            <g stroke="currentColor" fill="none" fillRule="evenodd">
              <path d="M16.724 10.726l4.651 5.349M12.03 16.408L16.8 21.8M16.8 1.8v28M30.8 16.3h-28M15.8 1.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM30.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM1.3 16.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM15.8 30.8a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM23.05 10.05l-12.5 12.5M22.6 9.3a1 1 0 1 1 1.999-.002A1 1 0 0 1 22.6 9.3zM8.8 23.3a1 1 0 1 1 1.999 0 1 1 0 0 1-2 0zM16.99 5.545l10.02 10.961M17 27.3l-10.7-11M27.01 16.131l-10.02 10.96M6.59 17.091l10.02-10.96M22.925 22.086L10.688 9.328M22.459 22.826a1 1 0 1 0 2 .043 1 1 0 0 0-2-.043zM8.953 8.542a1.001 1.001 0 1 0 2.002.04 1.001 1.001 0 0 0-2.002-.04z"></path>
            </g>
          </svg>
          <p className="lastScroll">
            Let us all join hands and work to give back to the society
          </p>
        </marquee>
      </section>
      <div className="container" style={{ margin: "1rem auto" }}>
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

      <div className="card card1 card1 text-center purely">
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
                YOUTH UNDERGOING TRAINING - AROUND 250 PER DAY IN 40 PLUS
                Parrellel Courses{" "}
              </h1>
              <br />
              <p>
                "Number of rural youth educated & certified to date exceeds 125,
                Trainers Number Crosses 50 Number of courses offered. Number of
                internships & jobs obtained after the training: Students
                Internships - 50.
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
                made within a short span of one year in-terms of increase in the
                number of beneficiaries, well qualified trainers besides pouring
                in advisory and other support. Beginning with three students,
                three trainers and three courses the initiative currently
                embraces more than two hundred students, spreading across more
                than 40 courses which are in high demand in the industry sector.
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
          <div className="col p-3">
            <h1>
              <br />
              Secular Education Coupled with Education in Human Values
            </h1>
            <br />
            <p>
              Number of rural youth educated & certified to date Excceds 125.{" "}
            </p>
          </div>
          <div className="col p-3">
            <h1 style={{ marginBottom: "2rem" }}>
              <br /> Mandatory training in Education in Human Values / Life
              Skills
            </h1>
            <p>
              EHV / LST sessions contribute to developing students integrated
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
        <div className="card card1 card1 p-3 bottomRight transition1">
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

        <div className="card card1 p-3 bottomLeft transition1">
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
        <div className="card card1  p-3 topRight bottomRight transition1">
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
        <div className="card card1  p-3 bottomLeft topLeft transition1">
          <h1>Astrazenica</h1>

          <img
            src={Actrazenica}
            alt="Error404"
            style={{ width: "60%", height: "100px", marginLeft: "1rem" }}
          />
          <div className="card-body">
            <p>
              {" "}
              <br />
              <br />
              A global, science-led biopharmaceutical business whose innovative
              medicines are used by millions of patients worldwide.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="card-group companies" style={{ color: "white" }}>
        <div className="card card1 p-3 topRight transition1">
          <h1>Check.in</h1>

          <img
            src={CheckIn}
            alt="Error404"
            style={{ width: "60%", height: "100px", marginLeft: "1rem" }}
          />
          <div className="card-body">
            <p>
              In Chek.in We bring in the latest automation technology - water
              and energy usage meters, sensors, alarm systems, security cameras
              - to solve unique community needs.
            </p>
          </div>
        </div>

        <div className="card card1 p-3 topLeft transition1">
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
            <button
              onClick={() => slide(circle)}
              className="btn btn-primary"
              style={{ marginRight: "250px" }}
            >
              &#x3008;
            </button>
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
            <button
              onClick={() => slidenext(circle)}
              className="btn btn-primary"
              style={{
                marginLeft: "250px",
              }}
            >
              &#12297;
            </button>
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
