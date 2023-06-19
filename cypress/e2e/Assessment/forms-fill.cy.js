describe('My First Test', () => {
    it('click on alert',()=>{
        cy.visit('https://webapp.hucu.us/login');
        cy.get('.fluid > input').type('joy');
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

        //Send Assessment
        cy.get(':nth-child(5) > :nth-child(1) > .content').click()
        cy.wait(4000)
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('.message-actions > .tiny').click()
        //Open forms
        cy.get(':nth-child(4) > .msg_attachment_style > .attached-forms > .attached-form').click()
        //Fill form
        cy.get(':nth-child(4) > :nth-child(3) > .ui').click()
        cy.get(':nth-child(5) > :nth-child(4) > .ui').click()
        cy.get('.actions > .primary').click()


    })

})

