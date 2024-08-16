import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_ALL_INQUIRYLISTPAGE = "GET_ALL_INQUIRYLISTPAGE";

const getAllEnquiryDataSuccess = (payload) => {
  return {
    type: GET_ALL_INQUIRYLISTPAGE,
    payload: payload,
  };
};

export const getAllEnquiryData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllEnquiryData());
    if (response?.data) {
      dispatch(getAllEnquiryDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
