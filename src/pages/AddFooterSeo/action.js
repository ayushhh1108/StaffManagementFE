import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const postAddSEO = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postSEO(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/seo-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateSEO = (payload, navigate, id) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.updateSEO(id), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/seo-list");
      window.location.reload();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
