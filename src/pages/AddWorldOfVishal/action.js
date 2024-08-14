import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessfullNavigate = (navigate) => {
  navigate("/worldofvishal-list");
};

export const postWorldOfVishal = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postWorldVishal(), payload, {
      headers,
    });
    if (response?.data?.status) {
      toast.success(response?.data?.message);
      handleSuccessfullNavigate(navigate);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const updateWorldOfVishal = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.updateWorldVishal(), payload, {
      headers,
    });
    if (response?.data) {
      toast.success(response?.data?.message);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    handleSuccessfullNavigate(navigate);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
