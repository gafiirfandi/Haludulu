import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { cartReducer } from "./cart/cart.reducer";
import { adminReducer } from "./admin/admin.reducer";

const persistCartConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
  blacklist: ["admin"],
};

const adminPersistConfig = {
  key: "admin",
  storage: storageSession,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  // admin: persistReducer(persistAdminConfig, adminReducer),
  admin: persistReducer(adminPersistConfig, adminReducer),
  // admin: adminReducer,
});

export default persistReducer(persistCartConfig, rootReducer);
