export class dashboardPage{
    productList(){
        return cy.get("div[class='mr-4']")
    }
    sideScroll(){
        return cy.get('div[class="overflow-auto"]')
    }
    summaryButton(){
        return cy.contains('Summary')
    }
    unitEconomics(){
        return cy.contains('Unit Economics')
    }
    adSpend(){
        return cy.xpath('//div[contains(text(),"Ad Spend ($)")]')
    }
}