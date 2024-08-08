import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_ALL_REVIEWPAGE = "GET_ALL_REVIEWPAGE";

const getAllReviewDataSuccess = (payload) => {
    console.log("hii",payload)
  return {
    type: GET_ALL_REVIEWPAGE,
    payload: payload,
  };
};

export const getAllReviewData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllReviewData());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getAllReviewDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
