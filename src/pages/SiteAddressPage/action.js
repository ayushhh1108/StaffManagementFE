import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_SITE_ADDRESS_LINKS = `GET_SITE_ADDRESS_LINKS`;

const getsiteAddressSuccess = (payload) => {
  return {
    type: GET_SITE_ADDRESS_LINKS,
    payload: payload,
  };
};

export const updateSiteAddress = (payload, navigate) => async (dispatch) => {
  try {
    console.log("updateSiteAddress", payload);
    const response = await api.post(apiEndPoints.updateSiteAddress(), payload);
    if (response?.data) {
      await getSiteAddress();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const getSiteAddress = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getSiteAddress());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getsiteAddressSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
