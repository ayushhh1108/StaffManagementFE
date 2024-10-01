import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_ALL_PROPERTY = "GET_ALL_PROPERTY";
export const GET_ALL_AMENITIES = "GET_ALL_AMENITIES";

const allPropertySuccessfully = (payload) => {
  return {
    type: GET_ALL_PROPERTY,
    payload: payload,
  };
};


const allAmenitiesSuccessfully = (payload) => {
  return {
    type: GET_ALL_AMENITIES,
    payload: payload,
  };
};

export const getAllPropertyData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllProperty());
    if (response?.data) {
      dispatch(allPropertySuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteProperty = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteProperty(), payload);
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


export const getAllAmenities = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAmenities());
    if (response?.data) {
      dispatch(allAmenitiesSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};