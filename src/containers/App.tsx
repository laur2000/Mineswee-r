import React from "react";
import GameWrapper from "./GameWrapper";
import AppRouter from "./Router";
import { Link } from "@reach/router";

const App = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <div></div>
      <Link to="/game">Empieza el juego</Link>
      <div></div>
      <Link to="/gameOver">Bomba secreta no tan secreta</Link>
      <AppRouter />
      Footer en comun
    </div>
  );
};

export default App;
