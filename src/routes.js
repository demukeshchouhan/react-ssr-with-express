import React from "react";
import Homepage from "./pages/Homepage";
import Users from "./pages/Users";

export default [
  {
    ...Homepage,
    path: "/",
    exact: true,
    title: "HomePage Title"
  },
  {
    path: "/about",
    render: () => <div>About</div>,
    exact: true,
    title: "About Title"
  },
  {
    ...Users,
    path: "/Users",
    exact: true,
    title: "Users Title"
  }
];
