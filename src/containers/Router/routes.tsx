import { RouteComponentProps } from "@reach/router";
import React from "react";

export interface Route {
  path: string;
  Component: React.LazyExoticComponent<
    (props: RouteComponentProps) => JSX.Element
  >;
}

export const routes: Route[] = [
  {
    path: "/game",
    Component: React.lazy(() => import("../GameWrapper")),
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
