import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  feedbackData: null,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEEDBACK_DATA":
      return {
        ...state,
        feedbackData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default feedbackReducer;
