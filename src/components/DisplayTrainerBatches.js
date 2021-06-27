import Reactm, { useState, useEffect } from "react";
import {
  Posts,
  StudentsTab,
  GradesTab,
  Discussion,
  Loader,
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
            {props.tab == "students" && (
              <StudentsTab batch_id={data.id} key={data.id} />
            )}
            {props.tab == "courses" && (
              <Posts id={data.id} key={data.id} user="teacher" />
            )}
            {props.tab == "grades" && (
              <GradesTab batch_id={data.id} key={data.id} user="teacher" />
            )}
            {props.tab == "recording" && (
              <TeacherRecording
                teacherDetails={props.teacherDetails}
                batch_id={data.id}
                key={data.id}
                user="teacher"
              />
            )}
            {props.tab == "discussion" && (
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
