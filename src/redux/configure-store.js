import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import createReducer from "./reducers";

const reducers = createReducer();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
