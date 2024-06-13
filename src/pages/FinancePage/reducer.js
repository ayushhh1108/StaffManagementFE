import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  financeData: null,
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_FINANCE":
      return {
        ...state,
        financeData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default financeReducer;
