import basePage from "./basePage"

export default class SearchPage extends basePage{

    static validateNumberOfProductInSearch(){
        cy.get('.product-grid').find('.item-box').should('have.length',2)
    }
    static clickOnSearchedItem(){
        cy.get('.product-grid').find('.item-box').contains('Elite Desktop PC').click()
    }
    static getPriceMatched(){
        cy.get('.product-price').should('be.visible').and('contain','1350.00')
    }
}
