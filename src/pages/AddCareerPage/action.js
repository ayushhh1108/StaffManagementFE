import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const postAddCareer = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postAddCareer(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/career-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateCareer = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postUpdateCareer(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/career-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};