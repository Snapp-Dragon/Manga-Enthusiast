import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Dashboard from "../src/components/dashboard/Dashboard";
import EditProfile from "../src/components/profile-form/EditProfile";
import CreateProfile from "../src/components/profile-form/CreateProfile";
import PrivateRoute from "../src/components/routing/PrivateRoute";
import Profiles from "./components/profiles/Profiles";
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';

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

              {/* Add these components to the main app component. This makes them visible */}
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component ={Profiles}/>
              <Route exact path="/profile/:id" component ={Profile}/>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/posts"
                component={Posts}
              />
            </Switch>
          </section>
        </Fragment>
      </Provider>
    </Router>
  );
};

export default App;
