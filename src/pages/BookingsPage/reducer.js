import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    bookingData: null,
};
 
const bookingDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BOOKINGPAGE": 
    console.log("hjm", action.payload?.data?.data)
      return {
        ...state,
        bookingData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default bookingDataReducer;
