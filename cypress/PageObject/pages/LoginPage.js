import basePage from "./basePage"

export default class LoginPage extends basePage{
    static login(username,password){
    cy.login(username,password)
}
static clickForgotPasswordLink(){
    cy.contains('Forgot password?').click()
}
static displayErrorMessage(){
    cy.get('.form-fields').should('be.visible').and('contain','Login was unsuccessful. Please correct the errors and try again.')
}
static emailValidator(){
    cy.get('.field-validation-error').should('be.visible').and('contain','Please enter a valid email address.') 
}
static successfulLoginValidsByEmailId(){
    cy.get('.header').should('contain','testPk@example.com')
}
}