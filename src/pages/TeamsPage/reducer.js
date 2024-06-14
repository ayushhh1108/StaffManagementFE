import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  teamMemberData: null,
};

const teamMembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DIRECTORS_DATA":
      return {
        ...state,
        teamMemberData: isNotthenSecondParameter(
          action.payload?.data?.data,
          []
        ),
      };
    default:
      return state;
  }
};

export default teamMembersReducer;
