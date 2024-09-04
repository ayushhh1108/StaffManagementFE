import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const ADD_BILLING_ADDRESS = `ADD_BILLING_ADDRESS`;

export const postAddBlog = (payload, navigate) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data", // Modify this line
    };
    const response = await api.post(apiEndPoints.postAddBlog(), payload, {
      headers,
    });
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/blog-list");
      window.location.reload();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateBlog = (payload, navigate) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data", // Modify this line
    };
    const response = await api.post(apiEndPoints.postUpdateBlog(), payload, {
      headers,
    });
    if (response?.data) {
      toast.success(response?.data?.message);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    navigate("/blog-list");
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
