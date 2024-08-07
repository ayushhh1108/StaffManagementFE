import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_ALL_CALLBACKPAGE = "GET_ALL_CALLBACKPAGE";

const getAllCallbackDataSuccess = (payload) => {
    console.log("hii",payload)
  return {
    type: GET_ALL_CALLBACKPAGE,
    payload: payload,
  };
};

export const getAllCallbackData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllCallbackData());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getAllCallbackDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
