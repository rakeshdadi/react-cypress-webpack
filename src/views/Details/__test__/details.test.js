/// <reference types="cypress" />

import React from 'react';
import { mount } from '../../../utils/testing.jsx';
import { _Details } from '../Details'

let state;
describe('<_Details />', () => {
  beforeEach(() => {
    state = {
      detailsReducer: {
        launchDetails: {}
      }
    }

    mount(<_Details />, { initialState: state })
  })

  it('should render loader', () => {
    cy.findByTestId('details-loading').should('exist')
  })

  it('should render launch details card', () => {
    state = {
      detailsReducer: {
        launchDetails: {
          mission_name: 'Falcon',
          launch_success: true,
          id: '123'
        }
      }
    }
    mount(<_Details />, { initialState: state })
    cy.findByTestId('launch-details-card').should('exist');
  });
})

