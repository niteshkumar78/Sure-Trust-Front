import Reactm, { useState } from "react";
import {
  Posts,
  StudentsTab,
  GradesTab,
  Discussion,
  TeacherRecording,
} from "./index";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value: value,
    setValue,
  };
}

function DisplayTrainerBatches(props) {
  const handleBatch = useInput();

  const { data } = props;
  console.log("data", data);
  return (
    <div className="assignment batch">
      <p className="">
        <a
          className="btn btn-primary "
          data-bs-toggle="collapse"
          href={"#course-" + props.course_id + "batch" + data.id}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            handleBatch.setValue(data.id);
          }}
        >
          <span className="assignmentName">{data.batch_name}</span>
        </a>
      </p>
      <div
        className="collapse"
        id={"course-" + props.course_id + "batch" + data.id}
      >
        {console.log(handleBatch, data.id)}
        {handleBatch.value === data.id && (
          <div>
            <div style={{ marginRight: "25px", textAlign: "right" }}>
              <a
                // className="btn btn-primary "
                style={{ color: "blue" }}
                type="button"
                data-bs-toggle={"offcanvas"}
                data-bs-target={"#offcanvasRight-" + data.id}
                aria-controls={"offcanvasRight"}
              >
                Course Info &#x2139;
              </a>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id={"offcanvasRight-" + data.id}
              aria-labelledby="offcanvasRightLabel"
              style={{ zIndex: 999999 }}
            >
              <div className="offcanvas-header">
                <h5 id={"offcanvasRightLabel"}>
                  <b>Course Details</b>
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss={"offcanvas"}
                  aria-label="Close"
                ></button>
              </div>
              <div className={"offcanvas-body"}>
                <p>
                  <b>Course Name :</b> {data.course.course_name}
                </p>
                <p>
                  <b>Prerequisites :</b> {data.course.prerequisites}
                </p>
                <p>
                  <b>Batch Name :</b> {data.batch_name}
                </p>
                <p>
                  <b>Course Start Date :</b> {data.start_date}
                </p>
                <p>
                  <b>Course Start Time :</b> {data.start_time}
                </p>
                <p>
                  <b>Course End Date :</b> {data.end_date}
                </p>
                <p>
                  <b>Course End Time :</b> {data.end_time}
                </p>
              </div>
            </div>
            {props.tab === "students" && (
              <StudentsTab batch_id={data.id} key={data.id} />
            )}
            {props.tab === "courses" && (
              <Reactm.Fragment>
                <TeacherRecording
                  teacherDetails={props.teacherDetails}
                  batch_id={data.id}
                  key={data.id}
                  user="teacher"
                  data={data}
                  course_id={props.course_id}
                />
                <Posts id={data.id} key={data.id} user="teacher" />
              </Reactm.Fragment>
            )}
            {props.tab === "grades" && (
              <GradesTab batch_id={data.id} key={data.id} user="teacher" />
            )}
            {props.tab === "recording" && (
              <TeacherRecording
                teacherDetails={props.teacherDetails}
                batch_id={data.id}
                key={data.id}
                user="teacher"
                data={data}
                course_id={props.course_id}
              />
            )}
            {props.tab === "discussion" && (
              <Discussion
                batch_id={data.id}
                key={data.id}
                user="teacher"
                // reload={handleBatchChange.value}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayTrainerBatches;
