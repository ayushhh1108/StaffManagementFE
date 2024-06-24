import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_LEGACY_DATA = `GET_LEGACY_DATA`;

const getLegacyDataSuccess = (payload) => {
  return {
    type: GET_LEGACY_DATA,
    payload: payload,
  };
};

const headers = {
  "Content-Type": "multipart/form-data", // Modify this line
};

export const updateLegacyData = (payload, navigate) => async (dispatch) => {
  try {
    console.log("updateLegacyData", payload);
    const response = await api.post(apiEndPoints.updateLegacyData(), payload, {
      headers,
    });
    if (response?.data) {
      await getLegacyData();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const getLegacyData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getLegacyData());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getLegacyDataSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
