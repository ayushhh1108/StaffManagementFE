import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const postAddSubCMS = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postSubCMS(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/cms-list");
      window.location.reload();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateSubCMS = (payload, navigate, id) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.updateSubCMS(id), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/cms-list");
      window.location.reload();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
