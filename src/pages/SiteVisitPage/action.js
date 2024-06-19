import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_SITE_VISIT_DATA = `GET_SITE_VISIT_DATA`;

const getSiteVisitsList = (payload) => {
  return {
    type: GET_SITE_VISIT_DATA,
    payload: payload,
  };
};

export const getSiteVisits = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getSiteVisits());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getSiteVisitsList(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
