import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    serviceData: null,
};
 
const serviceDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SERVICE_PAGE": 
    console.log("hjm", action.payload?.data?.data)
      return {
        ...state,
        serviceData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default serviceDataReducer;
