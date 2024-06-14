import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  constructionData: null,
};

const constructionPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONSTRUCTION_PROCESS_LIST":
      return {
        ...state,
        constructionData: isNotthenSecondParameter(
          action.payload?.data?.data,
          []
        ),
      };
    default:
      return state;
  }
};

export default constructionPageReducer;
