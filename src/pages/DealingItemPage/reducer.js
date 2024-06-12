import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  dealinItems: null,
};

const dealinItemsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DEALIN_ITEMS":
      return {
        ...state,
        dealinItems: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default dealinItemsPageReducer;
