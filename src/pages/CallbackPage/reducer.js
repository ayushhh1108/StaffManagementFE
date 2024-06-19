import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  callbackData: null,
};

const callbackPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CALL_BACK_DATA":
      return {
        ...state,
        callbackData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default callbackPageReducer;
