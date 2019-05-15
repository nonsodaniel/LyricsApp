import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
