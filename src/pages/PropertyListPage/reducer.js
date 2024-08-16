import { isNotthenSecondParameter } from "../../utils/helper";

const initialState = {
    propertyData: null
}


const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_SLIDERS":
            return {
                ...state,
                propertyData: isNotthenSecondParameter(action.payload, []),
            }
        default:
            return state
    }
}

export default propertyReducer;