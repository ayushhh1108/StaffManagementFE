import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  contactUsData: null,
};

const contactUsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTUS_DATA":
      return {
        ...state,
        contactUsData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default contactUsPageReducer;
