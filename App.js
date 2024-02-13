import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Catalog from "./Catalog";
import Compare from "./Compare";
import Product from "./Product";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/compare" component={Compare} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
