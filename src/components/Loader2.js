/*eslint-disable*/
import React from "react";

import logo from "../images/logo.png";

function Loader2(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        width: "100%",
        height: "100vh",
        zIndex: "99999999999",
        backgroundColor: "white",
      }}
    >
      <div
        className="containerLoader"
        style={{ zIndex: "99", height: "100vh" }}
      >
        <div style={{ marginTop: "-100px" }}>
          <img
            src={logo}
            width="100px"
            height="100px"
            style={{ display: "block" }}
          />

          <svg
            className="loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 340"
            style={{ marginLeft: "25px" }}
          >
            <circle cx="170" cy="170" r="160" stroke="#0d6efd" />
            <circle cx="170" cy="170" r="135" stroke="#404041" />
            <circle cx="170" cy="170" r="110" stroke="#0d6efd" />
            <circle cx="170" cy="170" r="85" stroke="#404041" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Loader2;
