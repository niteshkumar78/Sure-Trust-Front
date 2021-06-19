import cookie from "react-cookies";

const LoginApi = "https://suretrustplatform.herokuapp.com/users/get-token/";
const SignupApi = "https://suretrustplatform.herokuapp.com/users/";
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
  "https://suretrustplatform.herokuapp.com/discussion/discussiondummy/";

const GradesAssignment =
  "https://suretrustplatform.herokuapp.com/courses/assignment-posts/";

const GradesStudentsList =
  "https://suretrustplatform.herokuapp.com/courses/grades/";

const SendNewComment =
  "https://suretrustplatform.herokuapp.com/discussion/discussion/";

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
