describe('My First Test', () => {
    it('click on alert',()=>{
        cy.visit('https://webapp.hucu.us/login');
        //cy.get('.fluid > input').click();
       //  cy.get('.fluid > input').type('{backspace}');
       //  cy.get('.fluid > input').type('{backspace}');
        cy.get('.fluid > input').type('omar');
        cy.get('.large').click();
        cy.get('form').submit();
        cy.get('.icon > input').click();
        cy.get('.icon > input').type('Zoha@123');
        cy.get('.large').click();
        cy.get('form').submit();
        cy.get('.pincode-input-text:nth-child(1)').type('1');
        cy.get('.pincode-input-text:nth-child(2)').type('1');
        cy.get('.pincode-input-text:nth-child(3)').type('1');
        cy.get('.pincode-input-text:nth-child(4)').type('1');
        cy.get('.pincode-input-text:nth-child(1)').type('1');
        cy.get('.pincode-input-text:nth-child(2)').type('1');
        cy.get('.pincode-input-text:nth-child(3)').type('1');
        cy.get('.pincode-input-text:nth-child(4)').type('1');
        cy.wait(10000)

        //Add Collaborators
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(8000)
        cy.get(':nth-child(1) > .angle').click()
        cy.get(':nth-child(1) > .list > :nth-child(3)').click()
        cy.get(':nth-child(3) > .content > .header > .ui').click()
        cy.get('.actions > .primary').click()
        cy.wait(8000)
        cy.get('.actions > .ui').click()

    })
  
  })
