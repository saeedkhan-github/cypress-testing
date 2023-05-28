/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
// import { contains } from "cypress/types/jquery";
import { Login } from "./Login.cy";
     
    
describe('Test Create Patient Flow', () => {
   beforeEach(() => {
    Login();
      cy.wait(5000);
      
    });

   it('Create a new patient Channel',()=>{
      // cy.visit('https://webapp.hucu.us/login');
      const firstname = faker.person.firstName();
      const lastName= faker.person.lastName();
      const birthdate = faker.date.birthdate();
      const month = String(birthdate.getMonth()+1).padStart(2, '0');
       const PatientDate = `${month}/${String(birthdate.getDate()).padStart(2,'0')}/${birthdate.getFullYear()}`;
      
      const sex =faker.person.sex();
      
   
      cy.wait(5000);
      // cy.document().its("readyState").should("equal", "complete"); // Wait for the document to reach the "complete" ready state
      cy.get(".add-icon.image.ui").eq(0).should("be.visible"); // Wait for an element matching the selector to become visible

      
      cy.get('.add-icon.image.ui').eq(0).click({force: true}).then(()=>{
        
         cy.get('.four > .ui').click();
          cy.get('.required:nth-child(1) input').type(firstname);
          cy.get('.required:nth-child(2) input').type(lastName);
          cy.get('.required:nth-child(3) input').type(PatientDate);
          cy.get('.selection').type(sex);
          cy.get('.selected').click();
          cy.intercept("POST", "https://api.hucu.us/api/v2/entities/358/locations/1050/patients").as("apiRequest");
          cy.get('.blue').click();
                  cy.wait("@apiRequest").then((interception) => {
                  const response = interception.response;
                  expect(response.statusCode).to.eq(201);
               });

         
      });


   });


    it('Test Creating patient channel already exists', () => {
    
      cy.get('.add-icon.image.ui').eq(0).click({force: true}).then(()=>{
        
        cy.get('.four > .ui').click();
         cy.get('.required:nth-child(1) input').type('shah');
         cy.get('.required:nth-child(2) input').type('khalid');
         cy.get('.required:nth-child(3) input').type('10/10/2001');
         cy.get('.selection').click();
         cy.get('.selected').click();
         cy.intercept("POST", "https://api.hucu.us/api/v2/entities/358/locations/1050/patients").as("apiRequest");
         cy.get('.blue').click();
         cy.wait("@apiRequest").then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(400);
         });

         // cy.get('form').submit();

         cy.get('#create-patient-modal:nth-child(1)').
         should('have.text','Patient channel already existsThe patient channel you are trying to create already exists: shah khalid 10/10/2001BackJoin Channel');
      
         cy.get('.blue').click();
         cy.get('.basic').click();
         // cy.get('.action-button-container > .ui').click();
        
         

    }  
    );


    
   

     


    });
   
  })// close of describe