import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    sliderData: null,
}

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_SLIDERS":
            return {
                ...state,
                sliderData: isNotthenSecondParameter(action.payload?.data?.data, []),
            }
        default:
            return state
    }
}

export default sliderReducer;
