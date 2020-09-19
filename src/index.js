import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import ProfilePage from "views/ProfilePage/ProfilePage.js";
import Components from "views/Components/Components";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/test" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);