import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  ServiceRequestData: null,
};

const serviceRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SERVICE_REQUEST":
      return {
        ...state,
        ServiceRequestData: isNotthenSecondParameter(
          action.payload?.data?.data?.list,
          []
        ),
      };
    default:
      return state;
  }
};

export default serviceRequestReducer;
