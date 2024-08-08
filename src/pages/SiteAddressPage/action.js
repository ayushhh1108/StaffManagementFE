import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const GET_SITEADDRESS_LINKS = `GET_SITEADDRESS_LINKS`;

const getSiteAddressLinksSuccess = (payload) => {
  return {
    type: GET_SITEADDRESS_LINKS,
    payload: payload,
  };
};
export const updateSiteAddress = (payload, navigate) => async (dispatch) => {
    try {
      const response = await api.post(apiEndPoints.updateVishalAddress(), payload);
      if (response?.data) {
        await toast.success(response?.data?.message);
        await dispatch(getSiteAddressLinks());
      } else if (response?.response?.data?.message) {
        toast.error(response?.response?.data?.message);
      }
    } catch (error) {
      const { response: { data = {} } = {} } = error;
      return data;
    }
  };

export const getSiteAddressLinks = () => async (dispatch) => {
    try {
      const response = await api.get(apiEndPoints.getFooterAddress());
      if (response?.data) {
        toast.success(response?.data?.message);
        dispatch(getSiteAddressLinksSuccess(response));
      } else if (response?.response?.data?.message) {
        toast.error(response?.response?.data?.message);
      }
    } catch (error) {
      const { response: { data = {} } = {} } = error;
      return data;
    }
  };