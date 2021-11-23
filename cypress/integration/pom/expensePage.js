export class expensePage{
    addExpense(){
        return cy.contains('Add Expense')
    }
    headText(){
        return cy.xpath('//p[contains(@class,"font-medium text-gray-darkest")]')
    }
    expenseName(){
        return cy.get('input[value="Expense Name"]')
    }
    amount(){
        return cy.contains('input','Amount')
     }
}