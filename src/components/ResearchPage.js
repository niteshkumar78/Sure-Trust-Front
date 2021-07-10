import React from "react";
import "../ResearchPage.css";
const ResearchPage = () => {
  return (
    <div className="row researchPage" style={{ marginTop: "6rem" }}>
      <div className="column1 col-lg-6 col-md-6 col-12">
        <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />
      </div>
      <div
        className="column2 col-lg-6 col-md-6 col-12"
        style={{
          marginTop: "2rem",
          marginLeft: "1rem",
        }}
      >
        <p style={{ marginTop: "3rem", fontSize: "20px" }}>
          <b>
            <ins>Corner for research guidance</ins>
          </b>
        </p>
        <h1>Cost-free & Experienced Research Guidance</h1>
        <p>
          Research guidance for project work, research proposal writing,
          thesis/dissertation writing will be given. You will also get
          hand-holding step by step guidance for writing research papers that
          can be published in highly acclaimed journals, totally free of cost.
        </p>
        <a href="#" className="btn btn-light" role="button">
          Contact Us To Know More
        </a>
      </div>
    </div>
  );
};

export default ResearchPage;
