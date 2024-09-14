import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_ABOUT_DATA = `GET_ABOUT_DATA`;

const allAboutDataGetSuccessfully = (payload) => {
  return {
    type: GET_ABOUT_DATA,
    payload: payload,
  };
};

export const getAllAboutPageData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllAboutpage());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get About Data Successfull"
        )
      );
      dispatch(allAboutDataGetSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteAboutpage = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteAboutpage(), payload);
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
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
