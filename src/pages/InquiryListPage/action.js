import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_ALL_INQUIRYLISTPAGE = "GET_ALL_INQUIRYLISTPAGE";

const getAllEnquiryDataSuccess = (payload) => {
    console.log("hii",payload)
  return {
    type: GET_ALL_INQUIRYLISTPAGE,
    payload: payload,
  };
};

export const getAllEnquiryData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllEnquiryData());
    if (response?.data) {
      toast.success(response?.data?.message);
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
