import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const postAddCMS = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postCMS(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/cms-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateCMS = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postUpdateRole(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/cms-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
