/// <reference types="cypress" />

import React from 'react';
import { mount } from '../../../utils/testing.jsx';
import { _Home } from '../Home'

let state;

describe('<_Home />', () => {
  beforeEach(() => {
    state = {
      homeReducer: {
        launches: []
      }
    }
    mount(<_Home />, { initialState: state })
  })

  it('should render loader', () => {
    cy.findByTestId('home-loading').should('exist');
  })

  it('should render launch lsit page', () => {
    state = {
      homeReducer: {
        launches: [{
          name: 'Falcon',
          success: true,
          id: '123',
          flight_number: 1
        }]
      }
    }

    mount(<_Home />, { initialState: state })
    cy.findByTestId('page-header').should('exist');
    cy.findByTestId('launch-card').should('exist');
    cy.findByTestId('home-loading').should('not.exist');
    cy.findByTestId('launch-card').click();
  });
})

