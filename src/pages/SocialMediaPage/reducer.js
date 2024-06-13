import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  socialMediaData: null,
};

const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SOCIAL_LINKS":
      return {
        ...state,
        socialMediaData: isNotthenSecondParameter(
          action.payload?.data?.data,
          []
        ),
      };
    default:
      return state;
  }
};

export default socialReducer;
