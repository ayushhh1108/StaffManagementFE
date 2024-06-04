import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  blogsData: null,
};

const blogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BLOGS":
      return {
        ...state,
        blogsData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default blogsPageReducer;
