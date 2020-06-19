import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

//redux
import store from "./store";
import { Provider } from "react-redux";

// import "./App.css";

const App = () => {
  // //initializes materialize javascript
  // useEffect(() => {
  //   M.AutoInit();
  // });

  return (
    <Provider store={store}>
      <Fragment>
        <h3>App</h3>
      </Fragment>
    </Provider>
  );
};

export default App;
