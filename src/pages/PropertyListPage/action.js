import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_STAFF_PAGE = "GET_STAFF_PAGE";

const getStaffDataSuccess = (payload) => {
  return {
    type: GET_STAFF_PAGE,
    payload: payload,
  };
};

export const getStaffData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllStaff());
    if (response?.data) {
      toast.success(response?.data?.message);
      console.log(response);
      dispatch(getStaffDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const getSearchedStaffData = (searchString) => async (dispatch) => {
  try {
    const response = await api.get(
      `staff/search?query=${encodeURIComponent(searchString)}`
    );

    if (response?.data) {
      toast.success(response?.data?.message);
      console.log(response);
      dispatch(getStaffDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteStaff = (payload, navigate) => async (dispatch) => {
  try {
    console.log("ssss", payload._id);
    const response = await api.delete(apiEndPoints.deletestaff(payload?._id));
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      window.location.reload();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
