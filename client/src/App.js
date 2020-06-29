import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Dashboard from "../src/components/dashboard/Dashboard";
import PrivateRoute from "../src/components/routing/PrivateRoute";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//redux
import store from "./store";
import { Provider } from "react-redux";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/authActions";

import "./App.css";
import setAuthToken from "./util/setAuthToken";

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  //initializes materialize javascript
  useEffect(() => {
    M.AutoInit();
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Provider store={store}>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Provider>
    </Router>
  );
};

export default App;
