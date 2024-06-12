import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_SERVICE_REQUEST = "GET_SERVICE_REQUEST";

const getServiceRequests = (payload) => {
  return {
    type: GET_SERVICE_REQUEST,
    payload: payload,
  };
};

export const getServiceRequest = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getServiceRequests());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Fetch Successfull"
        )
      );
      dispatch(getServiceRequests(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteServiceReq = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(
      apiEndPoints.deleteServiceRequest(),
      payload
    );
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      dispatch(getServiceRequest());
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
