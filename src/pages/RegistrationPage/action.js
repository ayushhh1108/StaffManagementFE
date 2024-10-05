import axios from "axios";
import { toast } from "react-toastify";

export const registrationSubmit = (payload, endpoint,navigate) => async (dispatch) => {
  try {
    const response = await axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/${endpoint}`, payload)
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
      navigate("/login")
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
