import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "./routes";

const renderHtml = (req, store, title) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title || "Default Title"}</title>
        </head>
        <body>
            <div id="app">${content}</div>
            <script>
                window.INIT_STORE=${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>
        </html>
    `;
};

export default renderHtml;
