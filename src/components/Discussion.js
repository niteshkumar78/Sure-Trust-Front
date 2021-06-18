import React, { useState, useEffect } from "react";

import "../discussion.css";
import { DiscussionComments, SendNewComment } from "../apis/allApis";
import cookie from "react-cookies";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function Discussion(props) {
  const commentsList = useInput([]);
  const comment = useInput("");
  const loader = useInput(false);

  console.log(comment.value);

  function fetchComments() {
    // loader.setValue(true);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "batch-id": props.batch_id,
        "Content-Type": "application/json",
      },

      redirect: "follow",
    };

    fetch(DiscussionComments, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // loader.setValue(false);
        commentsList.setValue(result);
        console.log("Comments List", result);
      })
      .catch((error) => {
        // loader.setValue(false);
        console.log("error", error);
      });
  }

  useEffect(() => {
    fetchComments();
  }, []);

  const handleCommentChange = (e) => {
    comment.setValue(e.target.value);
  };

  function handleCommentSubmit(e) {
    loader.setValue(true);
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment.value,
        user: cookie.load("teacherId"),
        batch: props.batch_id,
      }),
      redirect: "follow",
    };

    fetch(SendNewComment, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);

        document.getElementById("message").value = "";
        fetchComments();
        console.log("Comments List", result);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
    e.preventDefault();
  }

  return (
    <div style={{ maxWidth: "1000px" }}>
      <div className="discusssionComments">
        <form onSubmit={handleCommentSubmit}>
          <h3>New Message</h3>

          <fieldset>
            <div className="">
              {/* <div className="col-sm-3 col-lg-2 hidden-xs">
                      <img
                        className="img-responsive"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                      />
                    </div> */}
              {/* <div className="form-group col-xs-12 col-sm-9 col-lg-10"> */}
              <textarea
                className="form-control discussionMessage"
                id="message"
                placeholder="Your message"
                required=""
                name="comment"
                rows="4"
                onChange={handleCommentChange}
              ></textarea>
              {/* </div> */}
            </div>
          </fieldset>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            {loader.value ? (
              <button type="submit" className="btn btn-secondary " disabled>
                Submit...&nbsp;&nbsp;
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden" style={{ height: "30px" }}>
                    Loading...
                  </span>
                </div>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
          </div>
        </form>
        <h3>Messages</h3>
        {commentsList.value.map((data) => (
          <div className="media-body commentBody">
            {data.user.student == null ? (
              <div>
                <div style={{ display: "flex" }}>
                  <h5 className="media-heading">{data.user.teacher.name}</h5>
                  <p className="commentEmail">{data.user.email}</p>
                </div>
                <p className="userComment">{data.comment}</p>
                <div>
                  <div className="list-unstyled list-inline media-detail pull-left">
                    <i className=""></i>
                    <b>{data.timestamp.slice(0, 10)}</b>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex" }}>
                  <h5 className="media-heading">{data.user.student.name}</h5>
                  <p className="commentEmail">{data.user.email}</p>
                </div>
                <p className="userComment">{data.comment}</p>
                <div>
                  <div className="list-unstyled list-inline media-detail pull-left">
                    <i className="fa fa-calendar"></i>
                    <b>{data.timestamp.slice(0, 10)}</b>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discussion;
