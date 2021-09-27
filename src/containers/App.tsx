import React from "react";

import AppRouter from "./Router";
import { Link } from "@reach/router";
import { SettingsProvider } from "../providers/SettingsProvider";

const App = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <div></div>
      <Link to="/game">Empieza el juego</Link>
      <div></div>
      <Link to="/gameOver">Bomba secreta no tan secreta</Link>
      <SettingsProvider>
        <AppRouter />
      </SettingsProvider>
      Footer en comun
    </div>
  );
};

export default App;
