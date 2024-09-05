import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

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

export const deleteContactUs = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteContactUs(), payload);
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      window.location.reload();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};