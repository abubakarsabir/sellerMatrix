import {dashboardPage}from "../pom/dashboardPage"
const locator= new dashboardPage();
beforeEach(() => {
  cy.login()
});
describe('Dashboard Test verification',()=>{
  it('Product List Summary tabs',()=>{
    locator.sideScroll().scrollTo('bottom')
    locator.productList()
      .contains('Product List')
    locator.summaryButton().click()
      .contains('Summary')
  })

  it('Product List unit economics verification',()=>{
    locator.sideScroll().scrollTo('bottom')
    locator.unitEconomics().click()
    locator.adSpend().contains('Ad Spend ($)')
  })

})
