import React, { useState, useEffect } from "react";
import cookie from "react-cookies";

import { PostsApi } from "../apis/allApis";
import { Loader } from "./index";

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
  const postList = useInput(true);

  const content = useInput("");
  const type = useInput("");
  const title = useInput("");
  const file = useInput();

  console.log("Title", title.value);
  console.log("ID", props.id);

  console.log("nextPostsPage", nextPostsPage);
  console.log("prevPostsPage", prevPostsPage);
  console.log("postPageCount", postPageCount);

  console.log("posts state", posts);

  // const aa = posts.value.results;

  function postFetch() {
    loader.setValue(true);
    var head;
    if (props.user === "student") {
      head = {
        Authorization: `Token ${cookie.load("token")}`,
        "course-id": `${props.id}`,
        "Content-Type": "application/json",
      };
    } else {
      head = {
        Authorization: `Token ${cookie.load("token")}`,
        "batch-id": props.id,
        "Content-Type": "application/json",
      };
    }

    var requestOptions = {
      method: "GET",
      headers: head,

      redirect: "follow",
    };

    fetch(PostsApi, requestOptions)
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
  }

  useEffect(() => {
    postFetch();
  }, []);

  function handlePagination(URL) {
    loader.setValue(true);
    var pageHead;

    if (props.user === "teacher") {
      pageHead = {
        Authorization: `Token ${cookie.load("token")}`,
        "batch-id": `${props.id}`,
        "Content-Type": "application/json",
      };
    } else {
      pageHead = {
        Authorization: `Token ${cookie.load("token")}`,
        "course-id": props.id,
        "Content-Type": "application/json",
      };
    }
    var requestOptions = {
      method: "GET",
      headers: pageHead,

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

  function handlePostClick() {
    document.getElementById(`postSubmit-${props.id}`).style.display = "block";
    document.getElementById(`postList-${props.id}`).style.display = "none";
  }

  function handlePostBack() {
    document.getElementById(`postSubmit-${props.id}`).style.display = "none";
    document.getElementById(`postList-${props.id}`).style.display = "block";
  }

  console.log("file", file.value);

  function handleFormSubmit(e) {
    loader.setValue(true);

    console.log("Title", title.value);
    console.log("Type", type.value);
    console.log("content", content.value);
    console.log("file", file.value);

    const postValue = [{}];

    const formData = new FormData();

    formData.append("title", title.value);
    formData.append("type", type.value);
    formData.append("content", content.value);
    formData.append("file", file.value);
    formData.append("batch", props.id);

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "batch-id": props.id,
      },
      body: formData,

      redirect: "follow",
    };

    fetch(PostsApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Post Submit", result);
        postValue[0] = result;

        postFetch();
        handlePostBack();
        loader.setValue(false);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
    e.preventDefault();
  }

  return (
    <React.Fragment>
      {/* <div className="card card-body"> */}
      {loader.value ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="card card-body" id={"postList-" + props.id}>
            {props.user === "teacher" && (
              <div className="row">
                <div className="col-12 d-flex">
                  <button
                    className="btn btn-outline-primary ml-auto"
                    id={"postButton-" + props.id}
                    style={{ marginRight: "10px" }}
                    onClick={handlePostClick}
                  >
                    + POST
                  </button>
                </div>
              </div>
            )}
            {posts.value.map((data) => (
              <div className="assignment assign">
                <p>
                  <a
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    href={"#batch" + props.id + "Assignment" + data.id}
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="assignmentName"> {data.title}</span>
                    <span className="courseName">{data.type}</span>
                    <span className="assignmentDate">
                      {data.date_time.slice(0, 10)}
                    </span>
                  </a>
                </p>
                <div
                  className="collapse"
                  id={"batch" + props.id + "Assignment" + data.id}
                >
                  <div className="card card-body">
                    <p>{data.content}</p>
                    {(data.type == "material" || data.type == "assignment") && (
                      <a href={data.file} target="_blank">
                        Click Here To Download
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {prevPostsPage.value !== null && (
                  <li className="page-item">
                    <a
                      className="page-link"
                      onClick={() => handlePagination(prevPostsPage.value)}
                    >
                      Previous
                    </a>
                  </li>
                )}
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
                {nextPostsPage.value !== null && (
                  <li className="page-item">
                    <a
                      className="page-link"
                      onClick={() => handlePagination(nextPostsPage.value)}
                    >
                      Next
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          {props.user === "teacher" && (
            <div
              id={"postSubmit-" + props.id}
              style={{ display: "none" }}
              className="card card-body"
            >
              <div className="row">
                <div className="col-12 d-flex">
                  <button
                    className="btn btn-outline-primary ml-auto"
                    id="postBackButton"
                    onClick={handlePostBack}
                    style={{ marginRight: "10px" }}
                  >
                    Back
                  </button>
                </div>
              </div>

              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    <b>Title</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                    name="title"
                    value={title.value}
                    onChange={(e) => title.setValue(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ paddingRight: "10px" }}
                  >
                    <b>Post Type :</b>
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      id="inlineRadio1"
                      value="assignment"
                      onChange={(e) => type.setValue(e.target.value)}
                      required
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Assignment
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      id="inlineRadio2"
                      value="announcement"
                      onChange={(e) => type.setValue(e.target.value)}
                      required
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Announcement
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      id="inlineRadio3"
                      value="material"
                      onChange={(e) => type.setValue(e.target.value)}
                      required
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      Material
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    <b>Content</b>
                  </label>
                  <textarea
                    rows="5"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Add content"
                    name="content"
                    value={content.value}
                    onChange={(e) => content.setValue(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    <b>Upload Material</b>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id={"fileInput-" + props.id}
                    name="file"
                    onChange={(e) =>
                      file.setValue(
                        document.getElementById(`fileInput-${props.id}`)
                          .files[0]
                      )
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </form>
            </div>
          )}
        </React.Fragment>
      )}

      {/* </div> */}
    </React.Fragment>
  );
}

export default TrainerPosts;
