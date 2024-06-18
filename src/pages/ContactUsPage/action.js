import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_CONTACTUS_DATA = `GET_CONTACTUS_DATA`;

const getContactUsList = (payload) => {
  return {
    type: GET_CONTACTUS_DATA,
    payload: payload,
  };
};

export const getContactUs = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getContactUs());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getContactUsList(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
