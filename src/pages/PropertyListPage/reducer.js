const initialState = {
  propertyData: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PROPERTY":
      return {
        ...state,
        propertyData: action.payload,
      };
    default:
      return state;
  }
};

export default propertyReducer;
