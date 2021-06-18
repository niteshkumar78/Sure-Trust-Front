import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { StudentsApi } from "../apis/allApis";
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function StudentsTab(props) {
  const studentsList = useInput([]);
  const course_id = props.course_id;
  const loader = useInput(false);

  var raw = JSON.stringify({
    batch_id: props.batch_id,
  });

  useEffect(() => {
    loader.setValue(true);
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${cookie.load("token")}`,
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    fetch(StudentsApi, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        loader.setValue(false);
        studentsList.setValue(result);
        console.log("Student", result);
      })
      .catch((error) => {
        loader.setValue(false);
        console.log("error", error);
      });
  }, []);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th className="studentsTableData">Reg. No.</th>
            <th className="studentsTableData">Name</th>
            <th className="studentsTableData">Contact</th>
            <th className="studentsTableData">Email</th>
          </tr>
        </thead>
        <tbody>
          {studentsList.value.map((value) => (
            <tr>
              <td className="studentsTableData">{value.registration_no}</td>
              <td className="studentsTableData">{value.name}</td>
              <td className="studentsTableData">{value.phone}</td>
              <td className="studentsTableData">{value.user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsTab;
