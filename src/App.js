import React from "react";
import Home from "./routes/Home";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(props) {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
      <footer>footer</footer>
    </>
  );
}

export default App;
