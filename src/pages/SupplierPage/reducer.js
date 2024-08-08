import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    supplierData: null,
};
 
const supplierDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SUPPLIER_PAGE": 
    console.log("hjm", action.payload?.data?.data)
      return {
        ...state,
        supplierData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default supplierDataReducer;
