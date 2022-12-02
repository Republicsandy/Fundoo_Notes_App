import axios from "axios";

export const loginApi = (loginObj) => {
  let response = axios.post("https://localhost:44347/api/User/Login", loginObj);
  return response;
};
export const registerApi = (registrationModel) => {
  let response = axios.post(
    "https://localhost:44347/api/User/Register",
    registrationModel
  );
  return response;
};

// https://localhost:44347/api/User/Login
// https://localhost:44347/api/User/Register
