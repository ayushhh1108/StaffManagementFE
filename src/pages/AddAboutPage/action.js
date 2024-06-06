import { toast } from "react-toastify";
import {
  api,
  apiEndPoints,
} from "../../api";

export const postAddAboutPage = (payload, navigate) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data", // Modify this line
    };
    const response = await api.post(apiEndPoints.postAddAboutpage(), payload, {
      headers,
    });
    if (response?.data?.status) {
      toast.success(response?.data?.message);
      navigate("/about-page-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
