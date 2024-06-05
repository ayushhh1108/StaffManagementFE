import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import axios from "axios";

export const POST_LOGIN_API = "POST_LOGIN_API";

const loginSuccessfull = (payload, navigate) => {
  navigate("/");
  return {
    type: POST_LOGIN_API,
    payload: payload,
  };
};

// const getUserFreightCheck = (payload) => {
//   return {
//     type: GET_USER_FREIGHT_CHECK,
//     payload: payload.data,
//   };
// };

export const loginSubmit = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/${apiEndPoints.postLogin()}`,
      {
        password: payload?.password,
        email: payload.username,
      }
    );
    if (response?.headers?.authorization) {
      localStorage.setItem("user", response?.headers?.authorization);
      toast.success("Login successfully");
      dispatch(loginSuccessfull(response, navigate));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
