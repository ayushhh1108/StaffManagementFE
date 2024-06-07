import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_ALL_SLIDERS = "GET_ALL_SLIDERS";

const allSliderGetSuccessfully = (payload) => {
  return {
    type: GET_ALL_SLIDERS,
    payload: payload,
  };
};

export const getAllSlider = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getAllSlider());
    if (response?.data) {
      toast.success(response?.data?.message);
      dispatch(allSliderGetSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteSlider = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteSlider(), payload);
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      dispatch(getAllSlider());
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
