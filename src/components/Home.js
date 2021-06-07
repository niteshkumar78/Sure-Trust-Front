import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  let loginAs = localStorage.getItem("loginAs");
  return (
    <div>
      <div style={{ height: "520px" }}>
        <div className=" h-100 d-flex justify-content-center align-items-center">
          <div>
            <h1 style={{ marginLeft: "15px" }}>HOME</h1>
            {props.login && (
              <Link
                to={loginAs}
                class="btn btn-primary"
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
