import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_CONSTRUCTION_PROCESS_LIST = `GET_CONSTRUCTION_PROCESS_LIST`;

const getConstructionList = (payload) => {
  return {
    type: GET_CONSTRUCTION_PROCESS_LIST,
    payload: payload,
  };
};

export const getConstructionProcess = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getConstructionProcess());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getConstructionList(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

export const deleteDirector = (payload, navigate) => async (dispatch) => {
  try {
    const response = await api.post(apiEndPoints.postDeleteDirector(), payload);
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
