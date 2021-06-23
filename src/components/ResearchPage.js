import React from "react";
import "../ResearchPage.css";

const ResearchPage = () => {
  return (
    <div className="row">
      <div className="column1 col-lg-6 col-md-6 col-12">
        <img src="research.jpg" style="weight:600px; height:550px;" />
      </div>
      <div
        className="column2 col-lg-6 col-md-6 col-12"
        style="background-color:#3b8fc5; color:white; margin-top:20px;"
      >
        <p style="margin-top:30px;">
          <b>
            <ins>Corner for research guidance</ins>
          </b>
        </p>
        <h1 style="margin-top:20px ; font-size:40px;">
          Cost-free & Experienced Research Guidance
        </h1>
        <p style="font-size:30px">
          Research guidance for project work, research proposal writing,
          thesis/dissertation writing will be given. You will also get
          hand-holding step by step guidance for writing research papers that
          can be published in highly acclaimed journals, totally free of cost.
        </p>
        <a
          href="#"
          className="btn btn-light "
          style="font-size:30px; margin-top:20px; "
          role="button"
        >
          Contact Us To Know More
        </a>
      </div>
    </div>
  );
};

export default ResearchPage;
