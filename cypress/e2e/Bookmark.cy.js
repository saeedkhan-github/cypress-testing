
// import { contains } from "cypress/types/jquery";
import { Login } from "./Login.cy";

describe('Test Bookmark in the patient channel', () => {
    it('Send a Message in the Channel', () => {
        
        Login();
        cy.wait(5000);
        cy.get('div.patient-name').contains('John Dav').click();
        // cy.get('button.ui tiny icon primary button send-button').click();
        
        cy.get('.tiny > .ui').click();
        cy.log("Recording voice Clip");
        cy.wait(5000);
        cy.get('.VoiceClipRecorder_buttonOK__1xIoQ > .ui').click();
        cy.get('.tiny > .ui').click();
        cy.get("i[class='play icon']").click();

    })
    
  })