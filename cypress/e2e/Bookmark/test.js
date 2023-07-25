/// <reference types="cypress"/>
import { Login } from "../Login/Login.cy";

    describe('bookmark', () => {
    it('Bookmark a message', () => {
        Login()
        cy.wait(10000)
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(5000)
        //cy.get(':nth-child(6) > .comments > .comment > .msg_attachment_style')
        cy.get("div[class='msg_attachment_style content']").last().rightclick()
        cy.wait(2000)

          
        //cy.get("div[class='msg_attachment_style content']").last().find('.text').rightclick().then(()=>{
    //cy.get('span[class="item-text bookmark"]').should('have.text',"Bookmark the Message").click(

             // Check if the message is bookmarked
             cy.get('span[class="item-text bookmark"]').last().then(() => {
               // Check if the message is already bookmarked
               if (('span[class="item-text bookmark"]').should('have.text', 'Bookmark the Message'))
               {
                 // If bookmarked, remove the bookmark
                 cy.contains('Bookmark the Message').click()
                 cy.get('span[class="item-text bookmark"]').should('have.text', 'Remove Bookmark')
               } else {
                 // If not bookmarked, bookmark the message
                 cy.contains('Remove Bookmark').click()
                 cy.get('span[class="item-text bookmark"]').should('have.text', 'Bookmark the Message')
               }
             })
            })
  })
