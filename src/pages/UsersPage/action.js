import { toast } from "react-toastify";
import {
  api,
  apiEndPoints,
} from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_USERS_DATA = `GET_USERS_DATA`;

const allAboutDataGetSuccessfully = (payload) => {
  return {
    type: GET_USERS_DATA,
    payload: payload,
  };
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllUsers());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get About Data Successfull"
        )
      );
      dispatch(allAboutDataGetSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteUser = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteUser(), payload);
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};