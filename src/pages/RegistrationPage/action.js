import axios from "axios";
import { apiEndPoints } from "../../api";
import { toast } from "react-toastify";

export const registrationSubmit = (payload, endpoint) => async (dispatch) => {
  try {
    const response = await axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/${endpoint}`, payload)
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
