describe('Delete a Message', () => {
    it('click on alert',()=>{
        cy.visit('https://webapp.hucu.us/login');
        cy.get('.fluid > input').type('emna.fatima');
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

        //Delete a Message
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(5000)
        // cy.get(':nth-child(4) > .msg_attachment_style').rightclick()
        // cy.wait(2000)
        // cy.get('span[class="item-text delete-message"]').click()


        //like a message
        cy.get(':nth-child(6) > .msg_attachment_style > .actions > .reactions-container > :nth-child(1) > .reaction-text').click()
        //cy.get('span[class="reaction-text"]').click()
        cy.contains('Like')
    })
        

    })
  

