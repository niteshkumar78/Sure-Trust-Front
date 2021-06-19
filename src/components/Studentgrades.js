import React, { useState, useEffect } from "react";
import cookie from "react-cookies";

import { GradesStudentsList } from "../apis/allApis";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function Studentgrades(props) {
  const loader = useInput(false);
  const grades = useInput("");
  const { value, post_id } = props;

  const gradingDetails = useInput(value);

  console.log(post_id);

  console.log(grades.value);

  console.log("Grading value", gradingDetails);

  function handleEditClick(e) {
    e.preventDefault();
    let editGrades = document.getElementById(`editGrades-${value.id}`);
    let saveGrades = document.getElementById(`saveGrades-${value.id}`);
    saveGrades.classList.toggle("edit1");
    editGrades.classList.toggle("edit1");
  }

  function handleGradesSubmit(e) {
    loader.setValue(true);
    var requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "post-id": `${post_id}`,
        // grading: grades.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grading: grades.value,
      }),
      redirect: "follow",
    };

    fetch(
      `https://suretrustplatform.herokuapp.com/courses/grades/${value.id}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        gradingDetails.setValue(result);
        console.log("Grades Students List", result);
        // document.getElementById(`gradingId-${gradingDetails.value.id}`).value =
        //   result.grading;
        handleEditClick(e);
        loader.setValue(false);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
    e.preventDefault();
  }

  const handleChange = (e) => {
    grades.setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <tr>
        <th scope="row">{gradingDetails.value.student.registration_no}</th>
        <td>{gradingDetails.value.student.name}</td>
        <td>{gradingDetails.value.student.user.email}</td>
        <td>{gradingDetails.value.date.slice(0, 10)}</td>
        <td>
          <a href={gradingDetails.value.file} target="blank">
            click here
          </a>
        </td>
        <td style={{ width: "150px" }}>
          {loader.value ? (
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div class="grades">
              <div
                class="editGrades"
                id={"editGrades-" + gradingDetails.value.id}
              >
                {gradingDetails.value.grading == null ? (
                  <span id={"gradingId-" + gradingDetails.value.id}>NA</span>
                ) : (
                  <span id={"gradingId-" + gradingDetails.value.id}>
                    {gradingDetails.value.grading}
                  </span>
                )}
                <a
                  href=""
                  class="editGradesBtn"
                  id={"editGradesBtn-" + gradingDetails.value.id}
                  onClick={handleEditClick}
                >
                  &#x270E;
                </a>
              </div>
              <div
                class=" saveGrades edit1"
                id={"saveGrades-" + gradingDetails.value.id}
              >
                <form onSubmit={handleGradesSubmit}>
                  <input
                    type="text"
                    style={{ width: "50px" }}
                    name="grades"
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    class="btn btn-primary"
                    // onClick={handleGradesSubmit}
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          )}
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Studentgrades;
