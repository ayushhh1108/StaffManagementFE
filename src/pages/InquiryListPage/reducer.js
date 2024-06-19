import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    inquiriesData: null,
};

const inquiryPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INQUIRIES_DATA":
      return {
        ...state,
        inquiriesData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default inquiryPageReducer;
