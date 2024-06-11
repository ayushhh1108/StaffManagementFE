import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_JOB_APPLICATIONS = "GET_JOB_APPLICATIONS";

const getJobappsSuccess = (payload) => {
  return {
    type: GET_JOB_APPLICATIONS,
    payload: payload,
  };
};

export const getJobApplications = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getJobApplications());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getJobappsSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
