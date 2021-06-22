import React, { useState, useEffect } from "react";
import cookie from "react-cookies";

import { GradesAssignment } from "../apis/allApis";
import { GradesList } from "./index";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function GradesTab(props) {
  const posts = useInput([]);
  // let prevPostsPage = useInput("");
  // const nextPostsPage = useInput("");
  // const postPageCount = useInput(0);

  console.log("Type", posts.value);

  function postFetch() {
    // loader.setValue(true);

    var raw;
    if (props.user === "teacher") {
      raw = JSON.stringify({
        batch_id: props.batch_id,
      });
    } else {
      raw = JSON.stringify({
        course_id: props.batch_id,
      });
    }

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        // "batch-id": props.batch_id,
        "Content-Type": "application/json",
      },
      body: raw,

      redirect: "follow",
    };

    fetch(GradesAssignment, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // loader.setValue(false);
        posts.setValue(result);
        // nextPostsPage.setValue(result.next);
        // prevPostsPage.setValue(result.previous);
        // postPageCount.setValue(result.count);

        console.log("Posts", result);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    postFetch();
  }, []);

  // function handlePagination(URL) {
  //   // loader.setValue(true);
  //   var requestOptions = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Token ${cookie.load("token")}`,
  //       "batch-id": props.batch_id,
  //       "Content-Type": "application/json",
  //     },

  //     redirect: "follow",
  //   };

  //   fetch(URL, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // loader.setValue(false);
  //       posts.setValue(result.results);
  //       nextPostsPage.setValue(result.next);
  //       prevPostsPage.setValue(result.previous);
  //       postPageCount.setValue(result.count);

  //       console.log("batch id", result);
  //     })
  //     .catch((error) => {
  //       // loader.setValue(false);
  //       console.log("error", error);
  //     });
  // }

  return (
    <div>
      <div className="card card-body" id={"postList-" + props.batch_id}>
        {posts.value.map((data) => (
          <React.Fragment>
            {data.type == "assignment" && (
              <div className="assignment assign">
                <p>
                  <a
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    href={"#batch" + props.batch_id + "Assignment" + data.id}
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="assignmentName" style={{ width: "50%" }}>
                      {data.title}
                    </span>

                    <span className="assignmentDate" style={{ width: "50%" }}>
                      {data.date_time.slice(0, 10)}
                    </span>
                  </a>
                </p>
                <div
                  className="collapse"
                  id={"batch" + props.batch_id + "Assignment" + data.id}
                >
                  {/* Write here */}
                  <GradesList
                    content={data.content}
                    post_id={data.id}
                    user={props.user}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => handlePagination(prevPostsPage.value)}
              >
                Previous
              </a>
            </li> */}
        {/* <li className="page-item">
  <a className="page-link" href="#">
    1
  </a>
</li>
<li className="page-item">
  <a className="page-link" href="#">
    2
  </a>
</li>
<li className="page-item">
  <a className="page-link" href="#">
    3
  </a>
</li> */}
        {/* <li className="page-item">
              <a
                className="page-link"
                onClick={() => handlePagination(nextPostsPage.value)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}

export default GradesTab;
