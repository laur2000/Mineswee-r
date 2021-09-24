import React from "react";

import { RouteComponentProps, Router } from "@reach/router";
import { Route, routes } from "./routes";

const AppRouter = () => {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Router>{routes.map(transformRouteToComponent)}</Router>
    </React.Suspense>
  );
};

export const transformRouteToComponent = (route: Route, index: number) => {
  return <route.Component path={route.path} key={route.path + "-" + index} />;
};

export default AppRouter;
