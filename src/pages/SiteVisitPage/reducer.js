import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  siteVisitData: null,
};

const siteVisitPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SITE_VISIT_DATA":
      return {
        ...state,
        siteVisitData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default siteVisitPageReducer;
