
function Login(){

    cy.visit('https://webapp.hucu.us/login');
    cy.get('.fluid > input').click();
   //  cy.get('.fluid > input').type('{backspace}');
   //  cy.get('.fluid > input').type('{backspace}');
    cy.get('.fluid > input').type('qa.test1');
    cy.get('.large').click();
    cy.get('form').submit();
    cy.get('.icon > input').click();
    cy.get('.icon > input').type('Saeed123@');
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
    cy.wait(5000);
}

export{Login}