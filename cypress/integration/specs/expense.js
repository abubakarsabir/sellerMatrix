import { expensePage } from "../pom/expensePage";
const locator= new expensePage();
beforeEach(() => {
  cy.login()
  cy.forceVisit(Cypress.env('expenses'));
});
describe('Expense Suite',()=>{
  it('To check expense button ',()=>{
    
    locator.addExpense().click()
    locator.headText().should('have.text','Expense Settings')
    cy.url().should('include','/expenses')

  })
})
