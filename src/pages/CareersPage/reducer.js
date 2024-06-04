import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  careersData: null,
};

const careersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CAREERS":
      return {
        ...state,
        careersData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default careersReducer;
