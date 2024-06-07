import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  userData: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_DATA":
      return {
        ...state,
        userData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default usersReducer;
