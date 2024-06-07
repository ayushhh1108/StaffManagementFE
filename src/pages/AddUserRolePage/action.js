import { toast } from "react-toastify";
import {
  api,
  addActionLoader,
  removeActionLoader,
  apiEndPoints,
} from "../../api";

export const ADD_BILLING_ADDRESS = `ADD_BILLING_ADDRESS`;
export const GET_PICKUP_SERVICES = "GET_PICKUP_SERVICES";
export const GET_ADDRESS_BY_CITY = "GET_ADDRESS_BY_CITY";
export const GET_DELIVERY_SERVICES = "GET_DELIVERY_SERVICES";
export const GET_HANDLING_SERVICES = "GET_HANDLING_SERVICES";
export const POST_SAVE_INFO = "POST_SAVE_INFO";
export const POST_EDIT_INFO = "POST_EDIT_INFO";
export const GET_USER_FREIGHT_CHECK = "GET_USER_FREIGHT_CHECK";

const getPickupservice = (payload) => {
  return {
    type: GET_PICKUP_SERVICES,
    payload: payload.data.pickupServices,
  };
};

const getAddressByCity = (payload) => {
  return {
    type: GET_ADDRESS_BY_CITY,
    payload: payload,
  };
};
const getDeliveryservice = (payload) => {
  return {
    type: GET_DELIVERY_SERVICES,
    payload: payload.data.deliveryServices,
  };
};
const getHandleingservice = (payload) => {
  return {
    type: GET_HANDLING_SERVICES,
    payload: payload.data.HandlingType,
  };
};
const postSaveInfo = (payload) => {
  return {
    type: POST_SAVE_INFO,
    payload: payload,
  };
};
const postEditInfo = (payload) => {
  return {
    type: POST_EDIT_INFO,
    payload: payload,
  };
};
const getUserFreightCheck = (payload) => {
  return {
    type: GET_USER_FREIGHT_CHECK,
    payload: payload.data,
  };
};

export const postAddRole = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postAddRole(), payload);
    if (response?.data) {
      toast.success(response?.data?.message);
      navigate("/roles-list");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const postUpdateRole = (payload, navigate) => async (dispatch) => {
    try {
      const response = await api.post(apiEndPoints.postUpdateRole(), payload);
      if (response?.data) {
        toast.success(response?.data?.message);
        navigate("/roles-list");
      } else if (response?.response?.data?.message) {
        toast.error(response?.response?.data?.message);
      }
    } catch (error) {
      const { response: { data = {} } = {} } = error;
      return data;
    }
  };