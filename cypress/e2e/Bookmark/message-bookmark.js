/// <reference types="cypress"/>
import { Login } from "../Login/Login";

    describe("Bookmark Functionality", () => {
        it("should bookmark the message if it contains 'bookmark' and run second statement", () => {
        Login()
        cy.wait(10000)
  
    //Bookmark message 1st method
        //open channel      
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(5000)
        cy.get("div[class='msg_attachment_style content']").last().rightclick()
        cy.wait(2000)

      // Assume there's a message with the class "message" that can be bookmarked
      cy.get('.react-contexify react-contexify__will-enter--fade').contains(".item-text bookmark").then(() => {
        if ('$item-text bookmark') {
          // Bookmark the message
          cy.get('.react-contexify react-contexify__will-enter--fade').contains(".item-text bookmark").siblings(".react-contexify__item__content").click();
          
          // Run the second statement
          // Add your assertions or actions here
          // For example:
          cy.get(".message").contains("bookmark").siblings(".details-button").click();
          cy.contains("Message details").should("be.visible");
          
          // Remove bookmark from the message
          cy.get(".message").contains("bookmark").siblings(".bookmark-button").click();
          cy.contains("Bookmark removed").should("be.visible");
        } else {
          // Run the first statement
          // Add your assertions or actions here
          // For example:
          cy.contains("This message is not bookmarked").should("be.visible");
          
          // Bookmark the message
          cy.get(".message").contains("bookmark").siblings(".bookmark-button").click();
          cy.contains("Message bookmarked").should("be.visible");
        }
      });
    });
  });
  