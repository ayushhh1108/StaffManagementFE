import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_ALL_NEWSLATER = "GET_ALL_NEWSLATER";

const getNewsLaterSuccess = (payload) => {
  return {
    type: GET_ALL_NEWSLATER,
    payload: payload,
  };
};

export const getAllNewsLaters = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getNewsLater());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getNewsLaterSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
