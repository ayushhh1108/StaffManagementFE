import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

const handleSuccessfullNavigate = (navigate) => {
  navigate("/construction-process-list");
};

export const postConstructionProcess =
  (payload, navigate) => async (dispatch) => {
    try {
      const response = await api.post(
        apiEndPoints.postConstructionProcess(),
        payload,
        {
          headers,
        }
      );
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

export const updateConstructionProcess =
  (payload, navigate) => async (dispatch) => {
    try {
      const response = await api.post(
        apiEndPoints.updateConstructionProcess(),
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
      handleSuccessfullNavigate(navigate);
    } catch (error) {
      const { response: { data = {} } = {} } = error;
      return data;
    }
  };
