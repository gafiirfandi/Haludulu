import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { cartReducer } from "./cart/cart.reducer";
import { authReducer } from "./auth/auth.reducer";

const persistCartConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
  blacklist: ["auth"],
};

const authPersistConfig = {
  key: "auth",
  storage: storageSession,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  // admin: persistReducer(persistAdminConfig, adminReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  // admin: adminReducer,
});

export default persistReducer(persistCartConfig, rootReducer);
