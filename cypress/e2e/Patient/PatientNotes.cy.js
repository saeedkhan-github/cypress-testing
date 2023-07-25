import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer";


// import { faker } from '@faker-js/faker';
// var firstname = faker.person.firstName();
// var lastname= faker.person.lastName();
// //var email = faker.person.email();
let patientdrawer = new PatientDrawer;

describe('Patient Notes Test', () => {
    it('Open Patient channel and update the patient Notes',()=>{
       
       Login();
        // open any top patient channel 
        patientdrawer.OpenPatientChannel('John Dav');
        
        cy.wait(2000);
        patientdrawer.ClickPatientDrawer();
        patientdrawer.PatientProfileClick();
        // cy.get("textarea[placeholder='Create Notes']").should('have.text','');
        cy.get('.pencil').click();
        cy.get("textarea[placeholder='Create Notes']").click().clear().then(($el)=>{
            cy.wrap($el).should('be.empty').type("Testing Patient Notes");
        })
        cy.get('.status-button > :nth-child(2) > .ui').click();
        //verify success message 
        cy.get('.rrt-text').should('have.text','Patient notes has been Updated successfully');
        //verify annoucment message in the chat
        cy.get("div[class='msg_attachment_style content']").last().find('.text').contains('updated the notes to:')
       
    })
  
  })
