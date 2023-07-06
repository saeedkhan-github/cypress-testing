import { Login } from "../Login.cy";
import { PatientDrawer } from "../PageObject/PatientDrawer";


// import { faker } from '@faker-js/faker';
// var firstname = faker.person.firstName();
// var lastname= faker.person.lastName();
// //var email = faker.person.email();
let patientdrawer = new PatientDrawer;

describe('My First Test', () => {
    it('click on alert',()=>{
       
       Login();
        // open any top patient channel 
        patientdrawer.OpenPatientChannel();
        
        cy.wait(2000);
        patientdrawer.ClickPatientDrawer();
        patientdrawer.PatientProfileClick();
        // cy.get("textarea[placeholder='Create Notes']").should('have.text','');
        cy.get('.pencil').click();
        cy.get("textarea[placeholder='Create Notes']").click().clear().type("Testing Patient Notes");
        cy.get('.status-button > :nth-child(2) > .ui').click();
        cy.get('.rrt-text').should('have.text','Patient notes has been Updated successfully');
       
    })
  
  })
