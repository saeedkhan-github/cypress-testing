import { Login } from "../Login";
beforeEach(function() {

    Login();
    cy.wait(3000);
    
  });

describe('My First Test', () => {
    it('click on alert',()=>{
        
        cy.wait(3000)

        //Send Assessment
        cy.get(':nth-child(1) > .content > .patient-info').click();
        //cy.get(':nth-child(5) > :nth-child(1) > .content').click()
        cy.wait(2000)
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('.message-actions > .tiny').click()

        // send Assessment form in the family channel 

        cy.get('.family-icon').click();
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('.message-actions > .tiny').click()

    })

})

