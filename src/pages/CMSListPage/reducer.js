import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  CMSData: null,
};

const CMSReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CMS_LIST":
      return {
        ...state,
        CMSData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default CMSReducer;
