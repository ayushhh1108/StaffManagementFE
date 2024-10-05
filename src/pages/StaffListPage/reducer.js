import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  staffData: null,
};

const staffDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STAFF_PAGE":
      console.log("action", action.payload);
      return {
        ...state,
        staffData: isNotthenSecondParameter(action.payload?.data, []),
      };
    default:
      return state;
  }
};

export default staffDataReducer;
