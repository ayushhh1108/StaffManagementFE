import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_ALL_BOOKINGPAGE = "GET_ALL_BOOKINGPAGE";

const getAllBookingDataSuccess = (payload) => {
  return {
    type: GET_ALL_BOOKINGPAGE,
    payload: payload,
  };
};

export const getAllBookingData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllBookingData());
    if (response?.data) {
      dispatch(getAllBookingDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
