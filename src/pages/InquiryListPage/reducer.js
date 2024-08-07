import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    enquiryData: null,
};

const enquiryDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_INQUIRYLISTPAGE": 
    console.log("hjm", action.payload?.data?.data)
      return {
        ...state,
        enquiryData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default enquiryDataReducer;
