describe('Testing Wordle App',function(){

    it('My Test',()=>{

        cy.visit('https://wordplay.com/');
        cy.wait(5000);
        cy.window().trigger('keydown',{key:'A'});
       
    })
})