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
  const userId = parseInt(cookie.load("userId"));

  console.log(comment.value);

  // console.log("user Id", cookie.load("userId"));

  function fetchComments() {
    // loader.setValue(true);
    var head;

    if (props.user === "teacher") {
      head = {
        Authorization: `Token ${cookie.load("token")}`,
        "batch-id": props.batch_id,
        "Content-Type": "application/json",
      };
    } else {
      head = {
        Authorization: `Token ${cookie.load("token")}`,
        "course-id": props.batch_id,
        "Content-Type": "application/json",
      };
    }

    var requestOptions = {
      method: "GET",
      headers: head,

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

    var requestOptions;

    if (props.user === "teacher") {
      requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Token ${cookie.load("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment.value,
          user: cookie.load("userId"),
          batch: props.batch_id,
        }),
        redirect: "follow",
      };
    } else {
      requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Token ${cookie.load("token")}`,
          "Content-Type": "application/json",
          "course-id": props.batch_id,
        },
        body: JSON.stringify({
          comment: comment.value,
          user: cookie.load("userId"),
        }),
        redirect: "follow",
      };
    }

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
    <React.Fragment>
      <div class="container">
        <h3 class=" text-center">Messaging</h3>
        <div class="messaging">
          <div class="inbox_msg">
            <div class="mesgs">
              <div class="msg_history">
                {commentsList.value.map((data) => (
                  <div>
                    {data.user.student == null ? (
                      <div>
                        {data.user.id === userId ? (
                          <div class="outgoing_msg">
                            <div class="sent_msg">
                              <span class="commentsUserName">
                                <b>{data.user.teacher.name}</b>
                              </span>
                              <p>{data.comment}</p>
                              <span class="time_date">
                                {data.timestamp.slice(0, 10)}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div class="incoming_msg">
                            <div class="incoming_msg_img">
                              <img
                                src="https://ptetutorials.com/images/user-profile.png"
                                alt="sunil"
                              />
                            </div>
                            <div class="received_msg">
                              <div class="received_withd_msg">
                                <span class="commentsUserName">
                                  <b>{data.user.teacher.name}</b>
                                </span>
                                <p>{data.comment}</p>
                                <span class="time_date">
                                  {data.timestamp.slice(0, 10)}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        {data.user.id === userId ? (
                          <div class="outgoing_msg">
                            <div class="sent_msg">
                              <span class="commentsUserName">
                                <b>{data.user.student.name}</b>
                              </span>
                              <p>{data.comment}</p>
                              <span class="time_date">
                                {data.timestamp.slice(0, 10)}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div class="incoming_msg">
                            <div class="incoming_msg_img">
                              <img
                                src="https://ptetutorials.com/images/user-profile.png"
                                alt="sunil"
                              />
                            </div>
                            <div class="received_msg">
                              <div class="received_withd_msg">
                                <span class="commentsUserName">
                                  <b>{data.user.student.name}</b>
                                </span>
                                <p>{data.comment}</p>
                                <span class="time_date">
                                  {data.timestamp.slice(0, 10)}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div class="type_msg">
                <div class="input_msg_write">
                  <form onSubmit={handleCommentSubmit}>
                    <input
                      type="text"
                      id="message"
                      class="write_msg"
                      placeholder="Type a message"
                      onChange={handleCommentChange}
                    />
                    <button class="msg_send_btn" type="submit">
                      &#x2708;
                      <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div style={{ maxWidth: "1000px" }}>
        <div className="discusssionComments">
          <form onSubmit={handleCommentSubmit}>
            <h3>New Message</h3>

            <fieldset>
              <div className="">
                
                <textarea
                  className="form-control discussionMessage"
                  id="message"
                  placeholder="Your message"
                  required=""
                  name="comment"
                  rows="4"
                  onChange={handleCommentChange}
                ></textarea>
              </div>
            </fieldset>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              {loader.value ? (
                <button type="submit" className="btn btn-secondary " disabled>
                  Submit...&nbsp;&nbsp;
                  <div className="spinner-border text-dark" role="status">
                    <span
                      className="visually-hidden"
                      style={{ height: "30px" }}
                    >
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
      </div> */}
    </React.Fragment>
  );
}

export default Discussion;
