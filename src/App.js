import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import DashBoard from "./components/layout/DashBoard";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={DashBoard} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
