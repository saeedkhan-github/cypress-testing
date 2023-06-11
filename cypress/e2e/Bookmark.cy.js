
// import { contains } from "cypress/types/jquery";
import { Login } from "./Login.cy";

describe('Test Bookmark in the patient channel', () => {
    it('Bookmark a message the patient channel', () => {
        
        Login();
        cy.wait(8000);
        cy.get('.search-input > .ui > input').click();
// cy.get('.ui fluid icon input').click();

cy.get('.search-input > .ui > input').type('Bookmark');
cy.get('.patient-info').click();
cy.get("div[class='msg_attachment_style content']").last().find('.text').rightclick().then(()=>{
    cy.get('span[class="item-text bookmark"]').should('have.text',"Bookmark the Message").click();
});
// cy.get('#messageInput').click();
// cy.get('#messageInput').type('testabc');
// cy.get('.primary').click();
// cy.log(cy.get("div[class='msg_attachment_style content']").last().find('.text'));
// cy.log(el > .text);
// console.log(el.children);

    })

    it('Check the Bookmarked messaged in the right Drawer bookmark tab and remove the bookmakred message')
    
    
  })