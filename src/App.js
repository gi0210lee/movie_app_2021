import React from "react";
import Home from "./routes/Home";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";

function App(props) {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;