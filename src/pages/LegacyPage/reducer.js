import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  addressData: null,
};

const siteAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SITE_ADDRESS_LINKS":
      console.log("action.payload?.data?.data", action.payload?.data?.data);
      return {
        ...state,
        addressData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default siteAddressReducer;
