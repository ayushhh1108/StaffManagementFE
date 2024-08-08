import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    callBackData: null,
};
 
const callBackDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CALLBACKPAGE": 
    console.log("hjm", action.payload?.data?.data)
      return {
        ...state,
        callBackData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default callBackDataReducer;
