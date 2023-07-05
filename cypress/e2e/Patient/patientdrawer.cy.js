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
        cy.get('.pencil').click();
        
        //Add Collaborators
        // cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        // cy.wait(8000)
        // //cy.get('#channel-listings > :nth-child(8) > :nth-child(2)')
        // cy.get(':nth-child(1) > .angle').click()
        // cy.get(':nth-child(1) > .channel_list_item').click()
        // cy.get(':nth-child(2) > .content > .header > .square').click()
        // cy.get('.actions > .primary').click()
    })
  
  })
