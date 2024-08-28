import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};
export const postAddSubCMS = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postSubCMS(), payload, {
      headers,
    });
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
    const response = await api.post(apiEndPoints.updateSubCMS(id), payload, {
      headers,
    });
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
