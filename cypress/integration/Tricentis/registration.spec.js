/// <reference types = "cypress" />
import { url } from '../../../config'
import Navbar from '../../PageObject/components/Navbar'
import LoginPage from '../../PageObject/pages/LoginPage'
import registrationPage from '../../PageObject/pages/registrationPage'

describe('Regression suite',function(){
    before(function(){
         //To Do 
         cy.visit(url)
         Navbar.clickRegister()

    })
    it('Fill the Mandatory Register  details',function(){
        
        registrationPage.selectGender()              //cy.get('input[value="M"]').click()
        registrationPage.enterFirstName('Test')      //cy.get('[name="FirstName"]').clear() // cy.get('[name="FirstName"]').type('Test')
        registrationPage.enterLastName('PK')          //cy.get('[name="LastName"]').clear()  // cy.get('[name="LastName"]').type('PK')
        const email_prefix = Cypress._.random(0, 1e6)
        const email_Id = 'mytestemail_'+email_prefix+'@gmail.com'
        registrationPage.enterEmailId(email_Id)      //cy.get('[name="Email"]').clear()  //cy.get('[name="Email"]').type(email_Id)
    })
    it('Fill Correct/Confirmpassword',function(){
        cy.fixture('example').then(user=>{
            const password = user.password
       
        registrationPage.enterPassword(password)    //cy.get('input[name="Password"]').clear() // cy.get('input[name="Password"]').type('password')
        registrationPage.enterConfirmPassword(password)  //cy.get('[name="ConfirmPassword"]').clear() //cy.get('[name="ConfirmPassword"]').type('password')
    })
})
    it('Submit Register button',function(){
        registrationPage.clickSubmitButton()         //cy.get('[name="register-button"]').click()
        cy.wait(1000)
    })
    it('Validation Welcome message with email id',function(){
        registrationPage.validateRegistrationCompletemsg()     //cy.get('.header').should('be.visible').and('include','Your registration completed')
        registrationPage.validateRegisterEmail()               //cy.get('.header-links').should('be.visible').and('have.text','textPK@example.com')
    })
})