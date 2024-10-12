import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

const handleSuccessfullNavigate = (navigate) => {
  navigate("/property-list");
  // window.location.reload();
};

export const postAddStaff = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postProperty(), payload);
    if (response?.data) {
      toast.success("Property Added Successfully");
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
    const response = await api.put(apiEndPoints.postUpdateProperty(id), payload);
    if (response?.data) {
      toast.success("Property Updated Successfully");
      handleSuccessfullNavigate(navigate);
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
