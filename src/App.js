import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Route path="/pizza">
        <Pizza />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};
export default App;
