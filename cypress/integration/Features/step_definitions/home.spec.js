/// <reference types="cypress" />
import { Then } from "cypress-cucumber-preprocessor/steps";
import { terminalLog } from '../../utils/testing';


Then('the user should see loader', () => {
  cy.get('[data-testid=home-loading]').should('exist')
})

Then('the user should see home page header and should not see loader', () => {
  cy.get('[data-testid=page-header]').should('exist')
  cy.get('[data-testid=home-loading]').should('not.exist')
  cy.checkA11y(null, null, terminalLog)
})

