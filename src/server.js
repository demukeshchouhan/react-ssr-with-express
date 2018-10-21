import "@babel/polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./routes";
import createStore from "./createStore";
import renderHtml from "./Html";

const app = express();

app.use(express.static("public"));
const PORT = 8991;

app.get("*", (req, res) => {
  // init store on server
  const store = createStore();
  const matchedRoute = matchRoutes(Routes, req.path);
  const { title } = matchedRoute[0].route;
  // load matched routes component
  const promises = matchedRoute.map(({ route }) => {
    return route.loadDataOnServer ? route.loadDataOnServer(store) : null;
  });

  Promise.all(promises).then(a => {
    res.send(renderHtml(req, store, title));
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
