// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.visit(Cypress.env('host'))
    .get('input[name="email"]').type('3889_test@sellermetrix.com')
    .get('input[name="password"]').type('Uk!d(cD9)')
    .get('div[role="checkbox"]').click()
    .get('.MuiButton-label').click()
    .url().should('include','/app')
    .get('p[class="hidden xs:inline-block"]').contains('Dashboard')
    .should('have.text','Dashboard')
});