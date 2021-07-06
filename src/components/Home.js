import React from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

function Home(props) {
  // let loginAs = localStorage.getItem("loginAs");
  let loginAs = cookie.load("loginAs");
  return (
    <div>
      <div style={{ height: "520px" }}>
        <div className=" h-100 d-flex justify-content-center align-items-center">
          <div>
            <h1 style={{ marginLeft: "15px" }}>HOME</h1>
            {props.login && (
              <Link
                to={loginAs}
                className="btn btn-primary"
                style={{ marginTop: "100px" }}
              >
                Go To {loginAs} Page
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React from "react";
// import "./Home.css";

// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// import data from "../data";
// import { developers_Details, motive } from "../data";

// import home from "../home.png";
// import clslabs from "../images/clsslabs.jpg";
// import birthvenue from "../images/birthvenue.jpg";
// import greyslide from "../images/greyslide.jpg";
// import lokibots from "../images/lokibots.jpg";
// import expect from "../images/expect.jpg";
// import home_1 from "../images/home-1.jpg";
// import home_2 from "../images/hame-2.jpg";
// import home_3 from "../images/home-3.jpg";
// import home_4 from "../images/home04.jpg";
// import home_5 from "../images/home-5.jpg";

// const Home = () => {
//   function truncate(str) {
//     return str?.length > 100 ? str.substr(0, 100 - 1) + "..." : str;
//   }
//   return (
//     <main>
//       {/* <!-- 1st page-->	 */}
//       <div className="container" style={{ margin: "3rem auto" }}>
//         <div className="row">
//           <div
//             className="col-md-12  text-center p-5"
//             style={{
//               backgroundColor: "rgb(152, 57, 136)",
//               borderTopLeftRadius: "2rem",
//               borderTopRightRadius: "2rem",
//             }}
//           >
//             <h1 className="welcomeHeading">Welcome to SURE Initiative</h1>
//           </div>
//           <div
//             className="col-md-12  text-left p-5"
//             style={{
//               backgroundColor: "rgb(152, 57, 136)",
//               borderBottomLeftRadius: "2rem",
//               borderBottomRightRadius: "2rem",
//             }}
//           >
//             {" "}
//             <p className="welcomeParagraph">
//               {" "}
//               "Work hard today for a better tomorrow"
//             </p>
//           </div>
//         </div>
//       </div>
//       <br />

//       {/* <!-- 2nd page--> */}
//       <section style={{ backgroundColor: "rgb(152, 57, 136)" }}>
//         <div className="container-fluid">
//           {motive.map((x) => {
//             const { id, src, title, content } = x;
//             return (
//               <>
//                 <div className="row p-5" key={id}>
//                   <div className="col-lg-6 col-md-6 col-12 ">
//                     <img
//                       src={src}
//                       alt={title}
//                       className="img-fluid"
//                       style={{ width: "650px", height: "400px" }}
//                     />
//                   </div>
//                   <div className="col-lg-6 col-md-6 col-12 motiveSection">
//                     <h1
//                       style={{
//                         fontSize: "3.5rem",
//                         color: "white",
//                         fontWeight: "700",
//                         textAlign: "left",
//                         marginTop: "2rem",
//                       }}
//                     >
//                       {title}
//                     </h1>
//                     <p
//                       style={{
//                         fontSize: "2.8rem",
//                         color: "white",
//                         marginTop: "2rem",
//                         textAlign: "justify",
//                       }}
//                     >
//                       {content}
//                     </p>
//                   </div>
//                 </div>
//                 <br />
//               </>
//             );
//           })}
//         </div>
//       </section>

//       {/* <!-- 3rd page--> */}

//       <div
//         className="card text-center"
//         style={{ backgroundColor: "rgb(121, 188, 255)" }}
//       >
//         <div className="card-body">
//           <h5
//             className="card-title "
//             style={{
//               fontSize: "2.8rem",
//               marginBottom: "3rem",
//               letterSpacing: "2px",
//             }}
//           >
//             PURELY A SERVICE - ORIENTED INITIATIVE.
//             <br />
//             FREE TRAINING FOR ENROLLED RURAL YOUTH.
//           </h5>
//           <a
//             href="#"
//             className="btn-lg btn-primary"
//             style={{
//               padding: "5px 15px",
//               fontSize: "1.7rem",
//               letterSpacing: "2px",
//               backgroundColor: "rgb(152, 57, 136)",
//             }}
//           >
//             LEARN MORE
//           </a>
//         </div>
//       </div>

//       {/* <!-- 4th page-->  */}

//       <div className="container-fluid">
//         <div className="row p-5">
//           <div className="col-lg-6 col-md-6 col-12">
//             <img
//               className="img-fluid"
//               src={expect}
//               style={{ width: "500px", height: "300px", marginLeft: "3rem" }}
//             />
//           </div>
//           <div className="col-lg-6 col-md-6 col-12">
//             <p
//               className="advisorContent"
//               style={{
//                 color: "rgb(152, 57, 136)",
//                 fontSize: "3rem",
//                 marginTop: "5rem",
//                 textAlign: "justify",
//               }}
//             >
//               <b style={{ fontWeight: "800" }}> WHAT TO EXPECT ?</b>
//               <br /> With SURE INITIATIVE be sure of upgrading your skills to
//               meet the ever changing demands of economic and industry scenario.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <!-- 5th page-->  */}

//       <section className="popup">
//         <div className="container text-primary">
//           <h1
//             style={{
//               fontSize: "3rem",
//               paddingLeft: "1rem",
//               marginTop: "3rem",
//               marginBottom: "2rem",
//               color: "rgb(152, 57, 136)",
//               fontWeight: "800",
//             }}
//           >
//             ACCOMPLISHMENTS
//           </h1>
//         </div>
//         <div className="container">
//           <div className="row popup_row">
//             <div
//               className="col p-5"
//               style={{
//                 zIndex: 1,
//                 borderRadius: "1rem",
//                 backgroundColor: "rgb(250, 240, 209)",
//                 boxShadow: "0 0 20px rgba(0,0,0,0.7)",
//               }}
//             >
//               <h1
//                 style={{
//                   fontSize: "2.8rem",
//                   marginLeft: "1rem",
//                   textAlign: "left",
//                   letterSpacing: "2px",
//                   fontWeight: "800",
//                   color: "rgb(152, 57, 136)",
//                 }}
//               >
//                 <br />
//                 YOUTH UNDERGOING TRAINING - 350 PER DAY IN 20 PARALLEL COURSES{" "}
//               </h1>
//               <br />
//               <p
//                 style={{
//                   fontSize: "2.2rem",
//                   lineHeight: "1.5",
//                   letterSpacing: "2px",
//                   textAlign: "justify",
//                   fontWeight: "600",
//                 }}
//               >
//                 "Number of rural youth educated & certified to date: 48 Number
//                 of courses offered: 25 Number of faculty: 28 Number of
//                 internships & jobs obtained after the training: Internships- 3
//                 in ML and 3 in Blockchain Technology Jobs Obtained: 7.
//               </p>
//             </div>
//             <div
//               className="col p-5"
//               style={{
//                 zIndex: 1,
//                 borderRadius: "1rem",
//                 backgroundColor: "rgb(250, 240, 209)",
//                 boxShadow: "0 0 20px rgba(0,0,0,0.7)",
//               }}
//             >
//               <h1
//                 style={{
//                   fontSize: "2.8rem",
//                   marginLeft: "1rem",
//                   textAlign: "left",
//                   letterSpacing: "2px",
//                   fontWeight: "800",
//                   color: "rgb(152, 57, 136)",
//                 }}
//               >
//                 <br />
//                 IMPACT OF THE INITIATIVE
//               </h1>
//               <p
//                 style={{
//                   fontSize: "2.2rem",
//                   lineHeight: "1.5",
//                   letterSpacing: "2px",
//                   textAlign: "justify",
//                   fontWeight: "600",
//                 }}
//               >
//                 <br />
//                 The impact of the initiative can be gauged from the progress
//                 made within a short span of 8 months in-terms of increasing in
//                 the number of beneficiaries, increase in the well qualified
//                 trainers besides pouring in advisory and other support.
//                 Beginning with three students, the initiative currently embraces
//                 more than hundred students, spread
//               </p>
//             </div>
//             <div
//               className="col  p-5"
//               style={{
//                 zIndex: 1,
//                 borderRadius: "1rem",
//                 backgroundColor: "rgb(250, 240, 209)",
//                 boxShadow: "0 0 20px rgba(0,0,0,0.7)",
//               }}
//             >
//               <h1
//                 style={{
//                   fontSize: "2.8rem",
//                   marginLeft: "1rem",
//                   textAlign: "left",
//                   letterSpacing: "2px",
//                   fontWeight: "800",
//                   color: "rgb(152, 57, 136)",
//                 }}
//               >
//                 <br />
//                 TEAM AT THE SURE INITIATIVE
//               </h1>
//               <p
//                 style={{
//                   fontSize: "2.2rem",
//                   lineHeight: "1.5",
//                   letterSpacing: "2px",
//                   textAlign: "justify",
//                   fontWeight: "600",
//                 }}
//               >
//                 <br />
//                 The SURE INITIATIVE team works sincerely and with dedication in
//                 order to get the required training to the door step of hither to
//                 deprived youth. The team is determined to work in unison for
//                 providing free employability enhancement skills to educated
//                 unemployed rural youth and other underprivileged youth.{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <br />

//       <div className="container text-primary">
//         <h1
//           style={{
//             fontSize: "3rem",
//             marginTop: "2rem",
//             marginBottom: "2rem",
//             paddingLeft: "1rem",
//             color: "rgb(152, 57, 136)",
//           }}
//         >
//           UNIQUENESS OF OUR TRAINING
//         </h1>
//       </div>
//       <div className="container">
//         <div className="row justify-content-evenly ">
//           <div
//             className="col  p-5"
//             style={{
//               borderRadius: "20rem",
//               background:
//                 "linear-gradient(to top right,rgb(95, 57, 152) 20%, rgb(152, 57, 136) 60%)",
//               padding: "10px 30px",
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: "2.5rem",
//                 marginLeft: "1rem",
//                 marginBottom: "2rem",
//                 color: "white",
//                 fontWeight: "600",
//                 marginLeft: "3rem",
//               }}
//             >
//               <br />
//               Entrepreneurship Mandatory training
//             </h1>
//             <br />
//             <p
//               style={{
//                 fontSize: "2.2rem",
//                 color: "white",
//                 letterSpacing: "2px",
//                 marginLeft: "3rem",
//                 textAlign: "justify",
//               }}
//             >
//               Number of rural youth educated & certified to date: 48 An
//               alternative channel for source of employment.{" "}
//             </p>
//           </div>
//           <div
//             className="col  p-5"
//             style={{
//               borderRadius: "20rem",
//               background:
//                 "linear-gradient(to top right,rgb(95, 57, 152) 20%, rgb(152, 57, 136) 60%)",
//               padding: "10px 30px",
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: "2.5rem",
//                 marginLeft: "1rem",
//                 marginBottom: "2rem",
//                 color: "white",
//                 fontWeight: "600",
//                 marginLeft: "3rem",
//               }}
//             >
//               <br /> Mandatory training in Education in Human Values
//             </h1>
//             <p
//               style={{
//                 fontSize: "2.2rem",
//                 color: "white",
//                 letterSpacing: "2px",
//                 marginLeft: "3rem",
//                 textAlign: "justify",
//               }}
//             >
//               EHV sessions contribute to developing students integrated
//               personality
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid text-primary">
//         <h1
//           style={{
//             fontSize: "3rem",
//             marginTop: "3rem",
//             marginBottom: "1rem",
//             marginLeft: "10rem",
//             paddingLeft: "1rem",
//             color: "rgb(152, 57, 136)",
//           }}
//         >
//           SURE INITIATIVE COLLABORATORS
//         </h1>
//       </div>

//       <div className="card-group">
//         <div
//           className="card  p-5"
//           style={{
//             backgroundColor: "rgb(152, 57, 136)",
//             borderTopRightRadius: "10rem",
//             borderBottomLeftRadius: "10rem",
//           }}
//         >
//           <h1
//             style={{
//               color: "white",
//               fontSize: "3rem",
//               textAlign: "left",
//               marginBottom: "2rem",
//               marginTop: "2rem",
//               fontWeight: "600",
//             }}
//           >
//             Lokibots Inc.
//           </h1>

//           <img
//             src={lokibots}
//             alt="Error404"
//             style={{ width: "60%", height: "100px" }}
//           />
//           <div
//             className="card-body  p-5"
//             style={{
//               backgroundColor: "rgb(152, 57, 136)",
//             }}
//           >
//             <p
//               style={{
//                 color: "white",
//                 fontSize: "2rem",
//                 textAlign: "justify",
//                 letterSpacing: "2px",
//               }}
//             >
//               LokiBots is an information technology company that specializes in
//               the fields of artificial intelligence, robotic process automation,
//               SaaS, and cloud computing. It helps business users to easily
//               capture end to end process models and define
//               dependencies/sequencing in them. Lokibots is a California based
//               company offers Auto RPA services to companies. Lokibots team
//               trains students in RPA at SURE Initiative.
//             </p>
//           </div>
//         </div>

//         <div
//           className="card p-5"
//           style={{
//             backgroundColor: "rgb(152, 57, 136)",
//             borderTopLeftRadius: "10rem",
//             borderBottomRightRadius: "10rem",
//           }}
//         >
//           <h1
//             style={{
//               color: "white",
//               fontSize: "3rem",
//               textAlign: "left",
//               marginBottom: "2rem",
//               marginTop: "2rem",
//               fontWeight: "600",
//             }}
//           >
//             BirthVenue
//           </h1>

//           <img
//             src={birthvenue}
//             alt="Error404"
//             style={{ width: "60%", height: "100px" }}
//           />
//           <div
//             className="card-body  p-5"
//             style={{ backgroundColor: "rgb(152, 57, 136)" }}
//           >
//             <p
//               style={{
//                 color: "white",
//                 fontSize: "2rem",
//                 textAlign: "justify",
//                 letterSpacing: "2px",
//               }}
//             >
//               {" "}
//               Birthvenue Growth Solutions Private Limited is a Private
//               incorporated on 12 September 2018. It is classNameified as
//               Non-govt company. Birthvenue is a blockchain-as-a-service provider
//               and assists management teams in understanding the fundamentals of
//               blockchain technology by creating industry-specific case studies
//               as references to use cases.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="card-group">
//         <div
//           className="card  p-5"
//           style={{
//             backgroundColor: "rgb(152, 57, 136)",
//             borderTopLeftRadius: "10rem",
//             borderBottomRightRadius: "10rem",
//           }}
//         >
//           <h1
//             style={{
//               color: "white",
//               fontSize: "3rem",
//               textAlign: "left",
//               marginBottom: "2rem",
//               marginTop: "2rem",
//               fontWeight: "600",
//             }}
//           >
//             Grey Slide Imaging Inc
//           </h1>

//           <img
//             src={greyslide}
//             alt="Error404"
//             style={{ width: "60%", height: "100px" }}
//           />
//           <div
//             className="card-body p-5"
//             style={{ backgroundColor: "rgb(152, 57, 136)" }}
//           >
//             <p
//               style={{
//                 color: "white",
//                 fontSize: "2rem",
//                 textAlign: "justify",
//                 letterSpacing: "2px",
//               }}
//             >
//               {" "}
//               Grey Slide Imaging (GSI) was born at the confluence of healthcare
//               and technology to transform the access to digital pathology. Grey
//               slide products and solutions aim to address the huge gap between
//               institutions such as hospitals, research labs, universities, and
//               pathologists.
//             </p>
//           </div>
//         </div>

//         <div
//           className="card  p-5"
//           style={{
//             backgroundColor: "rgb(152, 57, 136)",
//             borderTopRightRadius: "10rem",
//             borderBottomLeftRadius: "10rem",
//           }}
//         >
//           <h1
//             style={{
//               color: "white",
//               fontSize: "3rem",
//               textAlign: "left",
//               marginBottom: "2rem",
//               marginTop: "2rem",
//               fontWeight: "600",
//             }}
//           >
//             CLSS labs
//           </h1>

//           <img
//             src={clslabs}
//             alt="Error404"
//             style={{ width: "60%", height: "100px" }}
//           />
//           <div
//             className="card-body p-5"
//             style={{ backgroundColor: "rgb(152, 57, 136)" }}
//           >
//             <p
//               style={{
//                 color: "white",
//                 fontSize: "2rem",
//                 textAlign: "justify",
//                 letterSpacing: "2px",
//               }}
//             >
//               {" "}
//               Incorporated in 2008, CLSS is an established player in SAP - ERP
//               domain in India with 750+ person years of SAP consulting
//               experience. CLSS also has experience in building enterprise and
//               b2c custom web and mobile applications using some of the latest
//               open source technologies and frameworks established in the
//               industry.
//             </p>
//           </div>
//         </div>
//       </div>

//       <header>
//         <div className="container text-primary">
//           <h1
//             style={{
//               marginBottom: "2rem",
//               marginTop: "3rem",
//               color: "rgb(152, 57, 136)",
//             }}
//           >
//             PHOTO GALLERY
//           </h1>
//           {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//               {data.map((x) => {
//                 const { id, src } = x;
//                 if (id < 1) {
//                   return (
//                     <li
//                       data-target="#myCarousel"
//                       data-slide-to={id - 1}
//                       className="active"
//                     ></li>
//                   );
//                 }
//                 return (
//                   <li data-target="#myCarousel" data-slide-to={id - 1}></li>
//                 );
//               })}
//             </ol>
//             <div className="carousel-inner">
//               {data.map((x) => {
//                 const { id, src } = x;
//                 if (id < 1) {
//                   return (
//                     <div className="item active">
//                       <img src={src} alt="" />
//                     </div>
//                   );
//                 }
//                 return (
//                   <div className="item">
//                     <img src={src} alt="" />
//                   </div>
//                 );
//               })}
//             </div>
//             <a
//               className="left carousel-control"
//               href="#myCarousel"
//               data-slide="prev"
//             >
//               <span className="glyphicon glyphicon-chevron-left"></span>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a
//               className="right carousel-control"
//               href="#myCarousel"
//               data-slide="next"
//             >
//               <span className="glyphicon glyphicon-chevron-right"></span>
//               <span className="sr-only">Next</span>
//             </a>
//           </div> */}
//           <div id="myCarousel" className="carousel slide" data-ride="carousel">
//             {/* <!-- Indicators --> */}
//             <ol className="carousel-indicators">
//               <li
//                 data-target="#myCarousel"
//                 data-slide-to="0"
//                 className="active"
//               ></li>
//               <li data-target="#myCarousel" data-slide-to="1"></li>
//               <li data-target="#myCarousel" data-slide-to="2"></li>
//               <li data-target="#myCarousel" data-slide-to="3"></li>
//               <li data-target="#myCarousel" data-slide-to="4"></li>
//               <li data-target="#myCarousel" data-slide-to="5"></li>
//               <li data-target="#myCarousel" data-slide-to="6"></li>
//               <li data-target="#myCarousel" data-slide-to="7"></li>
//               <li data-target="#myCarousel" data-slide-to="8"></li>
//               <li data-target="#myCarousel" data-slide-to="9"></li>
//               <li data-target="#myCarousel" data-slide-to="10"></li>
//               <li data-target="#myCarousel" data-slide-to="11"></li>
//               <li data-target="#myCarousel" data-slide-to="12"></li>
//               <li data-target="#myCarousel" data-slide-to="13"></li>
//               <li data-target="#myCarousel" data-slide-to="14"></li>
//               <li data-target="#myCarousel" data-slide-to="15"></li>
//               <li data-target="#myCarousel" data-slide-to="16"></li>
//               <li data-target="#myCarousel" data-slide-to="17"></li>
//               <li data-target="#myCarousel" data-slide-to="18"></li>
//               <li data-target="#myCarousel" data-slide-to="19"></li>
//               <li data-target="#myCarousel" data-slide-to="20"></li>
//               <li data-target="#myCarousel" data-slide-to="21"></li>
//               <li data-target="#myCarousel" data-slide-to="22"></li>
//               <li data-target="#myCarousel" data-slide-to="23"></li>
//               <li data-target="#myCarousel" data-slide-to="24"></li>
//               <li data-target="#myCarousel" data-slide-to="25"></li>
//               <li data-target="#myCarousel" data-slide-to="26"></li>
//               <li data-target="#myCarousel" data-slide-to="27"></li>
//               <li data-target="#myCarousel" data-slide-to="28"></li>
//               <li data-target="#myCarousel" data-slide-to="29"></li>
//               <li data-target="#myCarousel" data-slide-to="30"></li>
//               <li data-target="#myCarousel" data-slide-to="31"></li>
//               <li data-target="#myCarousel" data-slide-to="32"></li>
//               <li data-target="#myCarousel" data-slide-to="33"></li>
//               <li data-target="#myCarousel" data-slide-to="34"></li>
//               <li data-target="#myCarousel" data-slide-to="35"></li>
//               <li data-target="#myCarousel" data-slide-to="36"></li>
//               <li data-target="#myCarousel" data-slide-to="37"></li>
//               <li data-target="#myCarousel" data-slide-to="38"></li>
//               <li data-target="#myCarousel" data-slide-to="39"></li>
//               <li data-target="#myCarousel" data-slide-to="40"></li>
//               <li data-target="#myCarousel" data-slide-to="41"></li>
//               <li data-target="#myCarousel" data-slide-to="42"></li>
//               <li data-target="#myCarousel" data-slide-to="43"></li>
//               <li data-target="#myCarousel" data-slide-to="44"></li>
//               <li data-target="#myCarousel" data-slide-to="45"></li>
//               <li data-target="#myCarousel" data-slide-to="46"></li>
//               <li data-target="#myCarousel" data-slide-to="47"></li>
//               <li data-target="#myCarousel" data-slide-to="48"></li>
//               <li data-target="#myCarousel" data-slide-to="49"></li>
//             </ol>

//             {/* <!-- Wrapper for slides --> */}
//             <div className="carousel-inner">
//               <div className="item active">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20130049.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>

//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20125750.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>

//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20094903.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20095345.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20094651.png/:/cr=t:0%25,l:0%25,w:51.15%25,h:51.15%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20125201.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20125201.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-03-03%20125939.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%202021-04-12%20172450.png/:/cr=t:0%25,l:0%25,w:95.84%25,h:95.84%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Orientation%20for%20Trainers%20-%2017th%20April%202021.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Picture%202.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Picture3.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Picture4.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Workshop%20--21st%20April%202021-P2.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Orientation%20Session%2017th%20april.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Workshop%2021st%20April%202021-Picture3.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Orientation%20Session%2017th%20april.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Orientation%20Session%2017th%20april.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture3.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture5.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture4.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture4.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Picture3.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Picture4.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Workshop%20--21st%20April%202021-P2.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Workshop%20in%20Emerging%20Technologies%20annd%20the%20nee.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Workshop%2021st%20April%202021-Picture3.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Orientation%20Session%2017th%20april.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Screenshot%20(9).png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture3.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture5.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture4.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture2.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture8.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture11.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture9.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture13.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture13.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture7.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture14.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture17.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture19.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture20.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture16.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture18.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture22.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture21.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture15.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Entrepreneurship%20-%20Pic%201.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//               <div className="item">
//                 <img
//                   src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Enterpreneurship%20-Picture12.png/:/rs=w:1300,h:800"
//                   alt=""
//                 />
//               </div>
//             </div>

//             {/* <!-- Left and right controls --> */}
//             <a
//               className="left carousel-control"
//               href="#myCarousel"
//               data-slide="prev"
//             >
//               <span className="glyphicon glyphicon-chevron-left"></span>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a
//               className="right carousel-control"
//               href="#myCarousel"
//               data-slide="next"
//             >
//               <span className="glyphicon glyphicon-chevron-right"></span>
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* <Carousel>
//         {developers_Details.map((x) => {
//           const { id, src, name, degree, contribution, link } = x;
//           return (
//             <Carousel.Item key={id}>
//               <div className="dev_details">
//                 <div className="circle"></div>
//                 <article>
//                   <h3>{name}</h3>
//                   <p>{contribution}</p>
//                   <p>{degree}</p>
//                   <a href={link}>HIRE</a>
//                 </article>
//                 <img src={src} alt={name} />
//               </div>
//             </Carousel.Item>
//           );
//         })}
//       </Carousel> */}
//       <section className="dev_section">
//         <h3>Website Designers</h3>
//         <div className="flex_dev">
//           {developers_Details.map((x) => {
//             const { id, src, name, degree, contribution, link } = x;
//             return (
//               <div className="dev_details">
//                 <article>
//                   <img src={src} alt={name} />
//                   <h4>{name}</h4>
//                   <p>{contribution}</p>
//                   <p
//                     style={{
//                       width: "80%",
//                       fontSize: "1.7rem",
//                       fontWeight: "500",
//                     }}
//                   >
//                     {degree}
//                   </p>
//                   <a href={link} target="blank">
//                     Hire
//                   </a>
//                 </article>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;
