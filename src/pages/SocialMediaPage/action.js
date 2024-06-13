import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_SOCIAL_LINKS = `GET_SOCIAL_LINKS`;

const getSocialLinksSuccess = (payload) => {
  return {
    type: GET_SOCIAL_LINKS,
    payload: payload,
  };
};

export const updateSocialLinks = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.updateSocialMedia(), payload);
    if (response?.data) {
      await toast.success(response?.data?.message);
      await getSocialLinks();
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const getSocialLinks = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getSocialMedia());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(getSocialLinksSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
