import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_ALL_CAREERS = "GET_ALL_CAREERS";

const allCareersGetSuccessfully = (payload) => {
  return {
    type: GET_ALL_CAREERS,
    payload: payload,
  };
};

export const getAllCareers = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllCareer(), {
      // skipAuth: true,
    });
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(allCareersGetSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteCareer = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteCareer(), payload);
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      dispatch(getAllCareers())
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};