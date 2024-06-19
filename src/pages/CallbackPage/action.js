import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_CALL_BACK_DATA = `GET_CALL_BACK_DATA`;

const getCallbackList = (payload) => {
  return {
    type: GET_CALL_BACK_DATA,
    payload: payload,
  };
};

export const getCallbackdata = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getCallbackdata());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getCallbackList(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
