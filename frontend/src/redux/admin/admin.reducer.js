import storageSession from "redux-persist/lib/storage/session";

export const INITIAL_STATE = {
  isLoggedIn: null,
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

// export default cartReducer;
