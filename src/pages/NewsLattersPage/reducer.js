import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  newsLaterData: null,
};

const newslaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_NEWSLATER": 
      return {
        ...state,
        newsLaterData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default newslaterReducer;
