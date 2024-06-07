import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_FEEDBACK_DATA = `GET_FEEDBACK_DATA`;

const allFeedbackDataSuccessfully = (payload) => {
  return {
    type: GET_FEEDBACK_DATA,
    payload: payload,
  };
};

export const getAllFeedback = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getFeedback());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get About Data Successfull"
        )
      );
      dispatch(allFeedbackDataSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteAboutpage = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteFeedback(), payload);
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
