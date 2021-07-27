import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './configure-store';
import { history } from './history';

import { Login } from './views/Login/Login';
import { Home } from './views/Home/Home';
import { Details } from './views/Details/Details';

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <React.StrictMode>
        <Route
          path='/home'
          exact
          component={Home}
        />
        <Route
          path='/'
          exact
          component={Login}
        />
        <Route
          path='/details/:flight_number'
          exact
          component={Details}
        />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);
