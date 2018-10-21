import React from "react";
import Homepage from "./pages/Homepage";
import Users from "./pages/Users";
import AppContainer from "./AppContainer";
import NotFound from "./pages/NotFound";

export default [
  {
    path: "/",
    ...AppContainer,
    routes: [
      {
        ...Homepage,
        path: "/",
        exact: true,
        title: "HomePage Title"
      },
      {
        path: "/about",
        render: ({ Redirect }) => (
          <div>
            About <Redirect to="/" />
          </div>
        ),
        exact: true,
        title: "About Title"
      },
      {
        ...Users,
        path: "/users",
        exact: true,
        title: "Users Title"
      },
      {
        ...NotFound
      }
    ]
  }
];
