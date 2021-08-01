import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './configure-store';
import { history } from './history';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { Login } from './views/Login/Login';
import { Home } from './views/Home/Home';
import { Details } from './views/Details/Details';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
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
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
