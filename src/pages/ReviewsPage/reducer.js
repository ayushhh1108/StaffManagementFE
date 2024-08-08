import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    reviewData: null,
};
 
const reviewDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_REVIEWPAGE": 
    console.log("hjm", action.payload?.data?.data)
      return {
        ...state,
        reviewData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default reviewDataReducer;
