import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";

export default () => {
  const middlewares = applyMiddleware(thunk, logger);
  const store = createStore(reducers, middlewares);
  return store;
};
