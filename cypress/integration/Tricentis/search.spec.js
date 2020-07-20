/// <reference types = "cypress" />
import { url } from '../../../config'
import Navbar from '../../PageObject/components/Navbar'
import LoginPage from '../../PageObject/pages/LoginPage'
import SearchPage from '../../PageObject/pages/SearchPage'

describe('Search an Element and find validate the price of the item',() =>{
it('search Elite Desktop in Search Text box',function(){
    cy.visit(url)
    Navbar.enterSearchItem('Desktop')
    SearchPage.validateNumberOfProductInSearch()    // cy.get('.product-grid').find('.item-box').should('have.length',2)
    SearchPage.clickOnSearchedItem()               //cy.get('.product-grid').find('.item-box').contains('Elite Desktop PC').click()
    SearchPage.getTitle('Demo Web Shop. Elite Desktop PC')
    SearchPage.getPriceMatched()
})




})