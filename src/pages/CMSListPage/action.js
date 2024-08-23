import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_CMS_LIST = `GET_CMS_LIST`;

const getCMSList = (payload) => {
  return {
    type: GET_CMS_LIST,
    payload: payload,
  };
};

export const getCMSlist = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getCMSList());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getCMSList(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteCMS = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.delete(apiEndPoints.deleteCMS(payload?._id));
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
