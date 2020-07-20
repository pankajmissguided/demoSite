import basePage from "./basePage"

export default class registrationPage extends basePage{
   static selectGender(){
        cy.get('input[value="M"]').click()
    }
   static enterFirstName(enterName){
        cy.get('[name="FirstName"]').type(enterName)
    }
   static enterLastName(enterLastName){
    cy.get('[name="LastName"]').type(enterLastName)
   }
   static enterEmailId(enterEmail){
    cy.get('[name="Email"]').type(enterEmail)
   }
   static enterPassword(password){
    cy.get('input[name="Password"]').type(password)
   }
   static enterConfirmPassword(password){
    cy.get('[name="ConfirmPassword"]').type(password)
   }
   static clickSubmitButton(){
    cy.get('[name="register-button"]').click()
   }
   static validateRegistrationCompletemsg(){
    cy.get('.header').should('be.visible').and('include','Your registration completed')
   }
   static validateRegisterEmail(){
    cy.get('.header-links').should('be.visible').and('have.text','textPK@example.com')
   }

}
