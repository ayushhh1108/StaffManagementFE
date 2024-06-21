import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_SITE_ADDRESS_LINKS = `GET_SITE_ADDRESS_LINKS`;

const getsiteAddressSuccess = (payload) => {
  console.log("payload", payload);
  return {
    type: GET_SITE_ADDRESS_LINKS,
    payload: payload,
  };
};

export const updateSocialLinks = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.updateSocialMedia(), payload);
    if (response?.data) {
      await toast.success(response?.data?.message);
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
