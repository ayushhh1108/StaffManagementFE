import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  SEOData: null,
};

const SEOReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEO_LIST":
      return {
        ...state,
        SEOData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default SEOReducer;
