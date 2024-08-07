import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  contactUsData: null,
};

const contactUsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTUSPAGE": 
      return {
        ...state,
        contactUsData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default contactUsDataReducer;
