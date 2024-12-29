
describe('Testing',function(){

    it('Click challenge testing',()=>{

        let classes ='btn-primary';
        cy.visit('https://uitestingplayground.com/click');
        cy.get('#badButton').should('have.class','btn-primary').click().should('not.have.class',classes);
       
    })

})