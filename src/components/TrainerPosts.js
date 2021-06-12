import React, { useState, useEffect } from "react";
import cookie from "react-cookies";

import { TeacherPostsApi } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function TrainerPosts(props) {
  const posts = useInput([]);
  let prevPostsPage = useInput("");
  const nextPostsPage = useInput("");
  const postPageCount = useInput(0);
  const loader = useInput(false);

  console.log("nextPostsPage", nextPostsPage);
  console.log("prevPostsPage", prevPostsPage);
  console.log("postPageCount", postPageCount);

  console.log("posts state", posts);

  const aa = posts.value.results;

  useEffect(() => {
    loader.setValue(true);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "batch-id": props.batch_id,
        "Content-Type": "application/json",
      },

      redirect: "follow",
    };

    fetch(TeacherPostsApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);
        posts.setValue(result.results);
        nextPostsPage.setValue(result.next);
        prevPostsPage.setValue(result.previous);
        postPageCount.setValue(result.count);

        console.log("batch id", result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function handlePagination(URL) {
    loader.setValue(true);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "batch-id": props.batch_id,
        "Content-Type": "application/json",
      },

      redirect: "follow",
    };

    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);
        posts.setValue(result.results);
        nextPostsPage.setValue(result.next);
        prevPostsPage.setValue(result.previous);
        postPageCount.setValue(result.count);

        console.log("batch id", result);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
  }

  return (
    <React.Fragment>
      <div class="card card-body">
        {loader.value ? (
          <div class="containerLoader" style={{ minHeight: "20vh" }}>
            <svg
              class="loader"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 340 340"
            >
              <circle cx="170" cy="170" r="160" stroke="#0d6efd" />
              <circle cx="170" cy="170" r="135" stroke="#404041" />
              <circle cx="170" cy="170" r="110" stroke="#0d6efd" />
              <circle cx="170" cy="170" r="85" stroke="#404041" />
            </svg>
          </div>
        ) : (
          posts.value.map((data) => (
            <div class="assignment assign">
              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href={"#batch" + props.batch_id + "Assignment" + data.id}
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span class="assignmentName"> {data.title}</span>
                  <span class="courseName">{data.type}</span>
                  <span class="assignmentDate">
                    {data.date_time.slice(0, 10)}
                  </span>
                </a>
              </p>
              <div
                class="collapse"
                id={"batch" + props.batch_id + "Assignment" + data.id}
              >
                <div class="card card-body">{data.content}</div>
              </div>
            </div>
          ))
        )}
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                onClick={() => handlePagination(prevPostsPage.value)}
              >
                Previous
              </a>
            </li>
            {/* <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li> */}
            <li class="page-item">
              <a
                class="page-link"
                onClick={() => handlePagination(nextPostsPage.value)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default TrainerPosts;
