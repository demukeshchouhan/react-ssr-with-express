import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import axios from "axios";

export default () => {
  const middlewares = applyMiddleware(thunk.withExtraArgument(axios), logger);
  const store = createStore(reducers, middlewares);
  return store;
};
