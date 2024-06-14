import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  directorsData: null,
};

const directorPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DIRECTORS_DATA":
      return {
        ...state,
        directorsData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default directorPageReducer;
