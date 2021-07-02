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
