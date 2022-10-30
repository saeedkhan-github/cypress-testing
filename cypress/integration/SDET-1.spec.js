describe('Run 1st tests',function(){

    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get("#input-username").type('demo');
        cy.get("#input-password" ).type('demo');
    });
    it('testing',()=>{
        console.log('Hello')l
    })

});