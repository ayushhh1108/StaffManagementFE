import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

const handleSuccessfullNavigate = (navigate) => {
  navigate("/staff-list");
  // window.location.reload();
};

export const postAddStaff = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postStaff(), payload);
    if (response?.data) {
      toast.success("Staff Added Successfully");
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

export const updateStaff = (payload, navigate, id) => async (dispatch) => {
  try {
    const response = await api.put(apiEndPoints.postUpdateStaff(id), payload);
    if (response?.data) {
      toast.success("Staff Updated Successfully");
      handleSuccessfullNavigate(navigate);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
