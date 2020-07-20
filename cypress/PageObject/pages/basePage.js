export default class basePage{
   static pause(ms){
    cy.wait(ms)
 }
 static logInfo(messages){
    cy.log(message)
 }
 static setMobileViewport(){
     cy.viewport('iphone-x')
 }
 static setTabletViewport(){
     cy.viewport('ipad-2')
 }
 static setDeskportViewport(){
     cy.viewport('macbook-13')
 }
 static setLargeDesktopViewport(){
     cy.viewport(1980,1080)
 }
 static getTitle(options){
     cy.title(options)
 }
 
}
