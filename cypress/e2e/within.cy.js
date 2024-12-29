describe('Testing Within',()=>{
    it('Runs Test',()=>{
        cy.visit('http://127.0.0.1:5500/Example.html')

       cy.get('#within-yields').within(()=>{
        return cy.contains('Child element').should('have.class','some-child');
       }).should('have.id','within-yields');
    })
})