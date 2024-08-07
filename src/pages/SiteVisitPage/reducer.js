import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  siteVisitData: null,
};

const siteVisitDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SITIVISITPAGE": 
      return {
        ...state,
        siteVisitData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default siteVisitDataReducer;
