import { faker } from '@faker-js/faker';
import { Login } from "../Login";
var firstname = faker.person.firstName();
var lastname = faker.person.lastName();
// Generate a random email address
const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;

describe('Add Remove Invite family member', () => {
    beforeEach(() => {
        Login("omar","Zoha@123");
      });
    it('Add Remove Invite family member', ()=> {
        
        //open patient channel
        cy.get(':nth-child(6) > :nth-child(3) > .content').click()
        cy.wait(4000)

        //open family channel
        cy.get('.family-channel-toggle-switch-container').click()

        //send invite to family member
        cy.get(':nth-child(1) > .angle').click()
        cy.get(':nth-child(2) > .channel_list_item').click()
        cy.get('.invite_txt').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > :nth-child(2) > .field > .ui > input').type(randomEmail)
        cy.get(':nth-child(3) > :nth-child(1) > .field > .ui > input').type(firstname)
        cy.get(':nth-child(3) > :nth-child(2) > .field > .ui > input').type(lastname)
        cy.get(':nth-child(3) > .eight > .field > .ui').click()
        cy.contains('Care Taker').click()
        cy.wait(2000)
        cy.get('.modal-buttons-container > .primary').click()
        cy.get('.actions > .ui').click()
        cy.wait(5000)

        //Remove colllaborators/family member
        cy.get(':nth-child(1) > .angle').click()
        cy.get(':nth-child(3) > .channel_list_item').click()
        cy.get(':nth-child(3) > .content > .header > .ui').click() 
        cy.wait(2000)
        cy.get('.actions > .primary').click()
        cy.get('.actions > .ui').click()
        cy.wait(2000)

        //Add collaboorattor in familly channel
        cy.get(':nth-child(1) > .angle').click()
        cy.get(':nth-child(1) > .channel_list_item').click()
        cy.get(':nth-child(2) > .content > .header > .square').click()
        cy.get('.actions > .primary').click()

        
    })
})