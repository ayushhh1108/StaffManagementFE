import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  data: null,
};

const worldofVishalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WORLD_OF_VISHAL_DATA":
      return {
        ...state,
        data: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default worldofVishalReducer;
