/// <reference types="cypress"/>

// import { contains } from "cypress/types/jquery";
import { Login } from "./Login.cy";

describe('Test VoiceClip in the patient channel', () => {
    it('Does not do much!', () => {
        cy.visit('https://webapp.hucu.us/login');
        Login();
        cy.wait(5000);
        cy.get('div.patient-name').contains('John Dav').click();
        // cy.get('button.ui tiny icon primary button send-button').click();
        
        cy.get('.tiny > .ui').click();
        cy.log("Recording voice Clip");
        cy.wait(5000);
        cy.get('.VoiceClipRecorder_buttonOK__1xIoQ > .ui').click();
        cy.get('.tiny > .ui').click();

    })
    
  })