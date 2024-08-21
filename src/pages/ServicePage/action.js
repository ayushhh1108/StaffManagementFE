import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_SERVICE_PAGE = "GET_SERVICE_PAGE";

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessfullNavigate = (navigate) => {
  navigate("/supplier-list");
};

const getServicePageDataSuccess = (payload) => {
  console.log("hii", payload);
  return {
    type: GET_SERVICE_PAGE,
    payload: payload,
  };
};

export const getServicePageData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getServices());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getServicePageDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteServices = (payload, navigate) => async (dispatch) => {
  try {
    console.log("ssss", payload._id);
    const response = await api.post(apiEndPoints.deleteServices(payload?._id));
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
