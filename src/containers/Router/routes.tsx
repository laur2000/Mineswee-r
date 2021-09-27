import React from "react";
import { Route } from "../../utils/declarations";

export enum Path {
  INDEX = "/",
  SETTINGS = "/settings",
  GAME = "/game",
  HIGHSCORE = "/highscore",
}

export const routes: Route[] = [
  {
    path: Path.GAME,
    Component: React.lazy(() => import("../Game")),
  },
  {
    path: Path.HIGHSCORE,
    Component: React.lazy(() => import("../Highscore")),
  },
  {
    path: Path.INDEX,
    Component: React.lazy(() => import("../Index")),
  },
  {
    path: Path.SETTINGS,
    Component: React.lazy(() => import("../SettingsView")),
  },
];
