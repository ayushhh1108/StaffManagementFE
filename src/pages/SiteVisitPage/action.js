import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_ALL_SITIVISITPAGE = "GET_ALL_SITIVISITPAGE";

const getSiteVisitDataSuccess = (payload) => {
  return {
    type: GET_ALL_SITIVISITPAGE,
    payload: payload,
  };
};

export const getAllSiteVisitData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllSiteVisitData());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getSiteVisitDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteSiteVisit = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteSiteVisit(), payload);
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