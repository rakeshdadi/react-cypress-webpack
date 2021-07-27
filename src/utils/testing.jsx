/// <reference types="cypress" />

import React from 'react';
import configureMockStore from 'redux-mock-store';
import merge from 'deepmerge';
import { mount } from '@cypress/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import defaultState from './__mocks__/defaultState.json';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui,
  { initialState = {}, history = createMemoryHistory() } = {}
) => {
  const mockStore = configureMockStore();
  const newStore = mockStore(merge.all([defaultState, initialState]));
  console.log(window)
  return mount(<Provider store={newStore}>
    <Router history={history}>{ui}</Router>
  </Provider>);
};

export { customRender as mount };

