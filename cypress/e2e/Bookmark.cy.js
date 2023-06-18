
// import { contains } from "cypress/types/jquery";
import { Login } from "./Login.cy";
require('@cypress/xpath');

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
    cy.get("div[class='msg_attachment_style content']").last().find('.bookmark-icon > .ui').should('be.visible');
});
    // go to notification center Bookmark tab and verifiy the bookmarked message 
    cy.get('.notification-container > .ui').click();
        cy.get('.pointing > :nth-child(4)').click();
        cy.get('#messagesList > .comments > :nth-child(1) > .msg_attachment_style > .text > div').should('have.text','testing message bookmarkd');

// cy.get('#messageInput').click();
// cy.get('#messageInput').type('testabc');
// cy.get('.primary').click();
// cy.log(cy.get("div[class='msg_attachment_style content']").last().children('.ui image').should()
// cy.log(el > .text);
// console.log(el.children);

    })

    it.only('Check the Bookmarked messaged in the right Drawer bookmark tab and remove the bookmakred message',()=>{

        Login();
        cy.wait(8000);

        cy.get('.notification-container > .ui').click();
        cy.get('.pointing > :nth-child(4)').click();
        cy.get('#messagesList > .comments > :nth-child(1) > .msg_attachment_style > .text > div').should('have.text','testing message bookmarkd');
        cy.get(':nth-child(1) > .msg_attachment_style').trigger('mouseover').then(($el)=>{
        cy.get("div.bookmark-messages-list > div > div:nth-of-type(1) div.metadata img").click();
            // cy.xpath('//body[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/button[1]/img[1]').click();
            })//close of then block
    //    cy.get("#messagesList > .comments > .msg_attachment_style > .text > div").should(($div)=>{
    //         cy.log($div.get(0).innerText);
    //         console.log($div.get(0).innerText)
    //     });
        //.should('have.class', 'text');
        
     
       
    //    cy.get('div >.msg_attachment_style content').should(($div) => {
    //     // access the native DOM element
    //     expect($div.get(0).innerText).to.eq('foobarbaz')
    //   })

        // checking the bookmark icon exists in the message 
        // cy.get('.search-input > .ui > input').click();
        //     cy.get('.search-input > .ui > input').type('Bookmark');
        //     cy.get('.patient-info').click();    
        //     cy.get("div[class='msg_attachment_style content']").last().find('.bookmark-icon > .ui').should('be.visible');
    })
    
    
  })