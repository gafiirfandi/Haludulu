import storage from "redux-persist/lib/storage";

export const INITIAL_STATE = {
  currentCart: {},
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        currentCart: action.payload,
      };
    default:
      return state;
  }
};

// export default cartReducer;
