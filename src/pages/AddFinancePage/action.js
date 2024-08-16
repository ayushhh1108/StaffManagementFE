import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessNavigate = (navigate) => {
  navigate("/finance-list");
};

export const postFinance = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postFinancepage(), payload, {
      headers,
    });
    if (response?.data?.status) {
      toast.success(response?.data?.message);
      handleSuccessNavigate(navigate);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateFinance = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(
      apiEndPoints.postUpdateFinance(),
      payload,
      {
        headers,
      }
    );
    if (response?.data) {
      toast.success(response?.data?.message);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
