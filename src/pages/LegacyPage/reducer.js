import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  legacyData: null,
};

const legacyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LEGACY_DATA":
      console.log("action.payload?.data?.data", action.payload?.data?.data);
      return {
        ...state,
        legacyData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default legacyDataReducer;
