import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  userRoleData: null,
};

const userRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CAREERS":
      return {
        ...state,
        userRoleData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default userRoleReducer;
