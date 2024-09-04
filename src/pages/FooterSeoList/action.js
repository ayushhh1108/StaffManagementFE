import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_SEO_LIST = `GET_SEO_LIST`;

const getSEOList = (payload) => {
  return {
    type: GET_SEO_LIST,
    payload: payload,
  };
};

export const getSEOlist = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getSEO());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getSEOList(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteSEO = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.delete(apiEndPoints.deleteSEO(payload?._id));
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
