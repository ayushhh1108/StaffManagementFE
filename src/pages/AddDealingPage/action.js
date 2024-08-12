import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessfullNavigate = (navigate) => {
  navigate("/dealing-list");
};

export const postAddDealIn = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postDealIn(), payload, {
      headers,
    });
    if (response?.data?.status) {
      toast.success(response?.data?.message);
      handleSuccessfullNavigate(navigate);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
