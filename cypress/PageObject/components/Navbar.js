export default class Navbar{
    static clickOnLogo(){
        cy.get('img[alt="Tricentis Demo Web Shop"]').click()
    }
    static enterSearchItem(text){
        cy.get('#small-searchterms').type(text)
        cy.get('input[value="Search"]').click()
    }
    static clickLogIn(){
        cy.get('.ico-login').click()
    }
    static clickRegister(){
        cy.get('.ico-register').click()
    }
    static clickShoppingCart(){
        cy.contains('Shopping cart').click()
    }
    static clickWishlist(){
        cy.contains('Wishlist').click()
    }
}