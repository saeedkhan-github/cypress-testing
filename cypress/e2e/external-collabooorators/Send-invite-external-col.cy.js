import { faker } from '@faker-js/faker';
var firstname = faker.person.firstName();
var lastname = faker.person.lastName();
// Generate a random email address
const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;

// Fill the email input field with the random email address
//cy.get('#emailInput').type(randomEmail);
//const randomemail = Math.ran
//var email = faker.person.email();
 //var Phone= faker.phone.number('773#######');
describe('My First Test', () => {
    it('click on alert',()=>{
        cy.visit('https://webapp.hucu.us/login');
        //cy.get('.fluid > input').click();
       //  cy.get('.fluid > input').type('{backspace}');
       //  cy.get('.fluid > input').type('{backspace}');
        cy.get('.fluid > input').type('omar');
        cy.get('.large').click();
        cy.get('form').submit();
        cy.get('.icon > input').click();
        cy.get('.icon > input').type('Zoha@123');
        cy.get('.large').click();
        cy.get('form').submit();
        cy.get('.pincode-input-text:nth-child(1)').type('1');
        cy.get('.pincode-input-text:nth-child(2)').type('1');
        cy.get('.pincode-input-text:nth-child(3)').type('1');
        cy.get('.pincode-input-text:nth-child(4)').type('1');
        cy.get('.pincode-input-text:nth-child(1)').type('1');
        cy.get('.pincode-input-text:nth-child(2)').type('1');
        cy.get('.pincode-input-text:nth-child(3)').type('1');
        cy.get('.pincode-input-text:nth-child(4)').type('1');
        cy.wait(10000)

        //Add Collaborators
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(8000)
        cy.get(':nth-child(1) > .angle').click()
        cy.get(':nth-child(1) > .list > :nth-child(1)').click()
        cy.get('.add_invite_container').click()
        cy.get(':nth-child(3) > :nth-child(1) > .field > .ui > input').type(firstname)
        cy.get(':nth-child(3) > :nth-child(2) > .field > .ui > input').type(lastname)
        cy.get(':nth-child(2) > :nth-child(2) > .field > .ui > input').type(randomEmail)
        cy.get('.modal-buttons-container > .primary').click()
        //cy.get('.actions > .primary').click()
    })
  
  })
