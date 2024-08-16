import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_ALL_PROPERTY = "GET_ALL_PROPERTY";

const allPropertySuccessfully = (payload) => {
  return {
    type: GET_ALL_PROPERTY,
    payload: payload,
  };
};

export const getAllPropertyData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllProperty());
    if (response?.data) {
      dispatch(allPropertySuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};