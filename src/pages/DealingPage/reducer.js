import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  dealInData: null,
};

const dealInPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DEALIN_DATA":
      return {
        ...state,
        dealInData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default dealInPageReducer;
