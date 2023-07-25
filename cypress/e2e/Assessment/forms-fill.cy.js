import "../Login.cy"
import { Login } from "../Login"

describe('My First Test', () => {
    it('click on alert',()=>{
       Login('joy','Zoha@123')
        // cy.get('.fluid > input').type('joy');
       
        // cy.get('.icon > input').type('Zoha@123');
        
        cy.wait(10000)

        //Send Assessment
        cy.get(':nth-child(5) > :nth-child(1) > .content').click()
        cy.wait(4000)
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('.message-actions > .tiny').click().then(()=>{
            //Open forms
            cy.get('.msg_attachment_style > .attached-forms > .attached-form').last().click()
        })
        
        
        //Fill form
        cy.get(':nth-child(4) > :nth-child(3) > .ui').click()
        cy.get(':nth-child(5) > :nth-child(4) > .ui').click()
        cy.get('.actions > .primary').click()


    })

})

