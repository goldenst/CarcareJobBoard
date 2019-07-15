import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";
import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import DashBoard from "./components/layout/DashBoard";
import AddJobs from "./components/jobs/AddJobs";
import EditJob from "./components/jobs/EditJob";
import JobDetails from "./components/jobs/JobDetails";
import Login from "./components/auth/Login";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="col-12">
            <Switch>
              <Route
                exact
                path="/"
                component={UserIsAuthenticated(DashBoard)}
              />
              <Route
                exact
                path="/job/add"
                component={UserIsAuthenticated(AddJobs)}
              />
              <Route
                exact
                path="/job/edit/:id"
                component={UserIsAuthenticated(EditJob)}
              />
              <Route
                exact
                path="/job/:id"
                component={UserIsAuthenticated(JobDetails)}
              />
              <Route
                exact
                path="/login"
                component={UserIsNotAuthenticated(Login)}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
