import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  siteAddressData: null,
};

const siteAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SITEADDRESS_LINKS":
      return {
        ...state,
        siteAddressData: isNotthenSecondParameter(
          action.payload?.data?.data,
          []
        ),
      };
    default:
      return state;
  }
};

export default siteAddressReducer;
