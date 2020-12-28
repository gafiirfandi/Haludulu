import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

import rootReducer from "./root-reducer";

export const composeEnhances =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ReduxThunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default { store, persistor };
