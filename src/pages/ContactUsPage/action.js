import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_ALL_CONTACTUSPAGE = "GET_ALL_CONTACTUSPAGE";

const getContactUsDataSuccess = (payload) => {
  return {
    type: GET_ALL_CONTACTUSPAGE,
    payload: payload,
  };
};

export const getAllContactUsData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllContactUsData());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getContactUsDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
