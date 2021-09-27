import React from "react";
import { Route } from "../../utils/declarations";

export const routes: Route[] = [
  {
    path: "/game",
    Component: React.lazy(() => import("../MineSweeper")),
  },
  {
    path: "/gameOver",
    Component: React.lazy(() => import("../GameOver")),
  },
  {
    path: "/",
    Component: React.lazy(() => import("../Setup")),
  },
];
