/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

import { terminalLog } from '../../utils/testing';

Given('the user visits login page for the first time', () => {
  cy.visit('/')
  cy.injectAxe()
})

Then('the user enter login details', () => {
  cy.get('form').within(() => {
    cy.get('input#username').clear().type('test', { delay: 200 });
    cy.get('input#password').clear().type('password');
    cy.get('button').click();
  });
  cy.checkA11y(null, null, terminalLog)
})
