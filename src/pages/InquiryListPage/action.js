import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_INQUIRIES_DATA = `GET_INQUIRIES_DATA`;

const getInquiriesList = (payload) => {
  return {
    type: GET_INQUIRIES_DATA,
    payload: payload,
  };
};

export const getInquiriesdata = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getInquiriesdata());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getInquiriesList(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
