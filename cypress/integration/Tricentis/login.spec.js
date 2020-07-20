/// <reference types = "cypress" />
import { url } from '../../../config'
import Navbar from '../../PageObject/components/Navbar'
import LoginPage from '../../PageObject/pages/LoginPage'

describe('Regression LoginPage',function(){
    beforeEach(function(){
        cy.visit(url)
        Navbar.clickLogIn()
        cy.url().should('include','login')
    })

    it('enter valid login details to successfully login account',function(){
        cy.fixture('example').then(user =>{
            const email = user.email
            const password = user.password
        LoginPage.login(email,password)
        LoginPage.successfulLoginValidsByEmailId()
       // cy.get('.header').should('contain','testPk@example.com')
        cy.wait(1000)
       //
    })
})
    it('enter invalid login details and validate message',function(){
        cy.fixture('example').then(user =>{
            const email = user.email
            const password = user.pwd
        LoginPage.login(email,password)
        LoginPage.displayErrorMessage()
        //cy.get('.form-fields').should('contain','Login was unsuccessful. Please correct the errors and try again.')

    })
})
it('check for invalid email and validate message',function(){
    cy.fixture('example').then(user =>{
        const email = user.email1
        const password = user.pwd
    LoginPage.login(email,password)
    LoginPage.emailValidator()
   // cy.get('.field-validation-error').should('contain','Please enter a valid email address.') 
  
})
})

})   
