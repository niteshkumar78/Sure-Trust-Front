import cookie from "react-cookies";

const LoginApi = "http://suretrustplatform.herokuapp.com/users/get-token/";
const SignupApi = "http://suretrustplatform.herokuapp.com/users/";
const TeacherCourseListApi =
  "https://suretrustplatform.herokuapp.com/courses/course/";
const BatchesApi = "https://suretrustplatform.herokuapp.com/courses/batch/";
const TeacherDetailsApi = `https://suretrustplatform.herokuapp.com/teacher/${cookie.load(
  "teacherId"
)}/`;
const PostsApi = "https://suretrustplatform.herokuapp.com/courses/posts/";
const StudentsApi =
  "https://suretrustplatform.herokuapp.com/courses/students-of-batch/";

const DiscussionComments =
  "http://suretrustplatform.herokuapp.com/discussion/discussiondummy/";

const GradesAssignment =
  "http://suretrustplatform.herokuapp.com/courses/assignment-posts/";

const GradesStudentsList =
  "http://suretrustplatform.herokuapp.com/courses/grades/";

const SendNewComment =
  "http://suretrustplatform.herokuapp.com/discussion/discussion/";

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
};
