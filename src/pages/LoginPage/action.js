import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";

export const POST_LOGIN_API = "POST_LOGIN_API";

const loginSuccessfull = (payload) => {
  return {
    type: POST_LOGIN_API,
    payload: payload,
  };
};

// const getUserFreightCheck = (payload) => {
//   return {
//     type: GET_USER_FREIGHT_CHECK,
//     payload: payload.data,
//   };
// };

export const loginSubmit = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postLogin(), {
      password: payload?.password,
      email: payload.username,
    });
    if (response?.data) {
      localStorage.setItem("user",response.data?.user?.token);
      toast.success("Login successfully");
      dispatch(loginSuccessfull(response));
      navigate("/");
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

// export const getPickUpServices = () => async (dispatch) => {
//   try {
//     const response = await api.get(apiEndPoints.getPickupService());
//     dispatch(getPickupservice(response));
//   } catch (error) {
//     const { response: { data = {} } = {} } = error;
//     return data;
//   }
// };

// export const getAddressByCityOrZip = (payload) => async (dispatch) => {
//   try {
//     const response = await api.post(apiEndPoints.getCityZipAddress(), {
//       name: payload,
//     });
//     dispatch(getAddressByCity(response));
//   } catch (error) {
//     const { response: { data = {} } = {} } = error;
//     return data;
//   }
// };

// export const getDeliveryServiceData = () => async (dispatch) => {
//   try {
//     const response = await api.get(apiEndPoints.getDeliveryService());
//     dispatch(getDeliveryservice(response));
//   } catch (error) {
//     const { response: { data = {} } = {} } = error;
//     return data;
//   }
// };

// export const getHandleingType = () => async (dispatch) => {
//   try {
//     const response = await api.get(apiEndPoints.getHandlingService());
//     dispatch(getHandleingservice(response));
//   } catch (error) {
//     const { response: { data = {} } = {} } = error;
//     return data;
//   }
// };

// export const getUserFreightClass = () => async (dispatch) => {
//   try {
//     const response = await api.get(apiEndPoints.getUserFreightClass());
//     dispatch(getUserFreightCheck(response));
//   } catch (error) {
//     const { response: { data = {} } = {} } = error;
//     return data;
//   }
// };
