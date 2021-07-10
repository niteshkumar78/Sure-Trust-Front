import cookie from "react-cookies";

const SourceURL = "https://suretrustplatform.herokuapp.com";

// const SourceURL =
//   "http://ec2-3-108-64-21.ap-south-1.compute.amazonaws.com:8000";

const LoginApi = `${SourceURL}/users/get-token/`;
const SignupApi = `${SourceURL}/users/`;
const TeacherCourseListApi = `${SourceURL}/courses/course/`;
const BatchesApi = `${SourceURL}/courses/batch/`;
const TeacherDetailsApi = `${SourceURL}/teacher/`;
const PostsApi = `${SourceURL}/courses/posts/`;
const StudentsApi = `${SourceURL}/courses/students-of-batch/`;

const DiscussionComments = `${SourceURL}/discussion/discussiondummy/`;

const GradesAssignment = `${SourceURL}/courses/assignment-posts/`;

const GradesStudentsList = `${SourceURL}/courses/grades/`;

const SendNewComment = `${SourceURL}/discussion/discussion/`;

const CoursesList = `${SourceURL}/courses/get-all-courses/`;

const AddToCourse = `${SourceURL}/users/add-to-course/`;
const StudentDetailsApi = `${SourceURL}/student/student/`;

const AdminPostApi = `${SourceURL}/courses/post-all/`;

export {
  LoginApi,
  SignupApi,
  TeacherCourseListApi,
  BatchesApi,
  TeacherDetailsApi,
  PostsApi,
  StudentsApi,
  DiscussionComments,
  GradesAssignment,
  GradesStudentsList,
  SendNewComment,
  CoursesList,
  AddToCourse,
  StudentDetailsApi,
  AdminPostApi,
  SourceURL,
};
