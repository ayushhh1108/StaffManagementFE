import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const postAddRole = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postAddRole(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/roles-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateRole = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postUpdateRole(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/roles-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
