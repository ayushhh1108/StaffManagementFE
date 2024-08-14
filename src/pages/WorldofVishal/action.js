import { toast } from "react-toastify";
import { api, apiEndPoints } from "../../api";
import { isNotthenSecondParameter } from "../../utils/helper";

export const GET_WORLD_OF_VISHAL_DATA = `GET_WORLD_OF_VISHAL_DATA`;

const getWorldofVishalSuccess = (payload) => {
  return {
    type: GET_WORLD_OF_VISHAL_DATA,
    payload: payload,
  };
};

export const getWorldofVishal = () => async (dispatch) => {
  try {
    const response = await api.get(apiEndPoints.getWorldVishal());
    if (response?.data) {
      toast.success(
        isNotthenSecondParameter(
          response?.data?.message,
          "Get Data Successfull"
        )
      );
      dispatch(getWorldofVishalSuccess(response));
    } else if (response?.response?.data?.message) {
      toast.error(response?.response?.data?.message);
    }
    console.log("response", response);
  } catch (error) {
    const { response: { data = {} } = {} } = error;
    return data;
  }
};

// export const deleteWorldofVishal = (payload, navigate) => async (dispatch) => {
//   try {
//     const response = await api.post(apiEndPoints.deleteDealIn(), payload);
//     if (response?.data) {
//       toast.success(
//         isNotthenSecondParameter(
//           response?.data?.message,
//           "Delete Data Successfull"
//         )
//       );
//       window.location.reload();
//     } else if (response?.response?.data?.message) {
//       toast.error(response?.response?.data?.message);
//     }
//     console.log("response", response);
//   } catch (error) {
//     const { response: { data = {} } = {} } = error;
//     return data;
//   }
// };
