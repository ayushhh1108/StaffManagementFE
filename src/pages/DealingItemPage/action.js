import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_DEALIN_ITEMS = `GET_DEALIN_ITEMS`;

const allAboutDataGetSuccessfully = (payload) => {
  return {
    type: GET_DEALIN_ITEMS,
    payload: payload,
  };
};

export const getDealInItems = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getDealingInItems());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get About Data Successfull"
        )
      );
      dispatch(allAboutDataGetSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteDealInItem = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(
      apiEndPoints.deleteDealingInItem(),
      payload
    );
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      dispatch(getDealInItems());
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
