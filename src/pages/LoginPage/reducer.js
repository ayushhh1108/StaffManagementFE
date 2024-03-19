const initialState = {
    loginData: null,
}

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST_LOGIN_API":
            return {
                ...state,
                loginData: action.payload
            }
        default:
            return state
    }
}

export default loginPageReducer;
