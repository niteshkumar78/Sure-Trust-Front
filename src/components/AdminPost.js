/*eslint-disable*/
import React, { useState } from "react";
import cookie from "react-cookies";
import { AdminPostApi } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function AdminPost(props) {
  const content = useInput("");
  const type = useInput("");
  const title = useInput("");
  const file = useInput();
  const postSubmitLoader = useInput(false);
  const success = useInput(false);
  const error1 = useInput(false);
  // const successMessage = useInput("");

  function handleFormSubmit(e) {
    postSubmitLoader.setValue(true);
    console.log("Title", title.value);
    console.log("Type", type.value);
    console.log("content", content.value);
    console.log("file", file.value);
    const formData = new FormData();

    formData.append("title", title.value);
    formData.append("type", type.value);
    formData.append("content", content.value);
    if (file.value !== undefined) {
      formData.append("file", file.value);
      // console.log("File Undefined 2");
    }
    // formData.append("batch", props.id);

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "Content-Type": "application/json",
      },
      body: formData,

      redirect: "follow",
    };

    fetch(AdminPostApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Post Submit", result);

        title.setValue("");
        // type.setValue("");
        content.setValue("");
        file.setValue();
        // successMessage.setValue("Post subbmitted sucessfully");
        if (result.success !== undefined) {
          error1.setValue(false);
          success.setValue(true);
        } else {
          success.setValue(false);
          error1.setValue(true);
        }
        postSubmitLoader.setValue(false);
      })
      .catch((error) => {
        success.setValue(false);
        error1.setValue(true);
        postSubmitLoader.setValue(false);
        console.log("error", error);
      });
    e.preventDefault();
  }

  return (
    <div
      className="card card-body"
      style={{ marginTop: "7rem", minHeight: "77.5vh" }}
    >
      {success.value && (
        <div className="alert alert-success" role="alert">
          Post submitted sucessfully
        </div>
      )}
      {error1.value && (
        <div className="alert alert-danger" role="alert">
          Something went wrong, please try again after some time!!!!
        </div>
      )}
      <h1 style={{ textAlign: "center" }}>Admin Post</h1>
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
            id="adminPostAll"
            name="file"
            onChange={(e) =>
              file.setValue(document.getElementById("adminPostAll").files[0])
            }
          />
        </div>
        {postSubmitLoader.value ? (
          <button className="btn btn-secondary" disabled>
            Posting...&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        )}
      </form>
    </div>
  );
}

export default AdminPost;
