import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import Routes from "./Routes";
import reducers from "./reducers";

const middlewares = applyMiddleware(thunk.withExtraArgument(axios), logger);
const store = createStore(reducers, window.INIT_STORE, middlewares);

hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
