import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
  jobAppData: null,
};

const jobApplicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOB_APPLICATIONS":
      return {
        ...state,
        jobAppData: isNotthenSecondParameter(action.payload?.data?.data, []),
      };
    default:
      return state;
  }
};

export default jobApplicationsReducer;
