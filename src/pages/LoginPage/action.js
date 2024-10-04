import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import axios from "axios";
import LocalStorageManager from "../../utils/local-storage-manager";

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
    const response = await axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/${apiEndPoints.postLogin()}`,
        {
          password: payload?.password,
          email: payload?.username,
        }
      )
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
    if (response?.status === 200) {
      LocalStorageManager?.setLocalStorage("user", response?.data);
      navigate("/dashboard");
      console.log("creds-response", response);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
