import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  aboutPageData: null,
};

const aboutPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ABOUT_DATA":
      return {
        ...state,
        aboutPageData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default aboutPageReducer;
