const initialState = {
  propertyData: null,
  amenities: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PROPERTY":
      return {
        ...state,
        propertyData: action.payload,
      };
    case "GET_ALL_AMENITIES":
      return {
        ...state,
        amenities: action.payload?.data?.data?.list,
      };
    default:
      return state;
  }
};

export default propertyReducer;
