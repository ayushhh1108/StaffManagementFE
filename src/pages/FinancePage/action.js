import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_ALL_FINANCE = "GET_ALL_FINANCE";

const getFinanceDataSuccessfully = (payload) => {
  return {
    type: GET_ALL_FINANCE,
    payload: payload,
  };
};

export const getFinanceData = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getFinancepage());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Data fetched successfully"
        )
      );
      dispatch(getFinanceDataSuccessfully(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteCareer = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.deleteCareer(), payload);
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Delete Data Successfull"
        )
      );
      dispatch(getFinanceData());
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};
