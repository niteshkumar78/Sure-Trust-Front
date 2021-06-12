import cookie from "react-cookies";

const LoginApi = "http://suretrustplatform.herokuapp.com/users/get-token/";
const SignupApi = "http://suretrustplatform.herokuapp.com/users/";
const TeacherCourseListApi =
  "https://suretrustplatform.herokuapp.com/courses/course/";
const BatchesApi = "https://suretrustplatform.herokuapp.com/courses/batch/";
const TeacherDetailsApi = `https://suretrustplatform.herokuapp.com/teacher/${cookie.load(
  "teacherId"
)}/`;
const TeacherPostsApi =
  "https://suretrustplatform.herokuapp.com/courses/posts/";

export {
  LoginApi,
  SignupApi,
  TeacherCourseListApi,
  BatchesApi,
  TeacherDetailsApi,
  TeacherPostsApi,
};
