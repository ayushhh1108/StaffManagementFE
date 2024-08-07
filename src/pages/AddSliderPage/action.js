import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};
export const postAddSlider = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postAddSlider(), payload, {
      headers,
    });
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/slider-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateSlider = (payload, navigate) => async (dispatch) => {
  console.log("error", payload);
  try {
    const response = await api.post(apiEndPoints.postUpdateSlider(), payload, {
      headers,
    });
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/slider-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
