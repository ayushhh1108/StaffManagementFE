import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  propertyData: null,
};

const propertyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROPERTY_PAGE":
      console.log("action", action.payload?.data);
      return {
        ...state,
        propertyData: isNotthenSecondParameter(action.payload?.data, []),
      };
    default:
      return state;
  }
};

export default propertyDataReducer;
