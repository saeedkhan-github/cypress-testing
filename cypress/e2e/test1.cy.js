describe('Testing app',function(){

    it('sample app testing',()=>{

        cy.visit('https://react-redux.realworld.io/#/login?_k=ueer3x');
        cy.title().should('eq','Conduit');
        cy.get('input[type="email"]').type('saeedullah321@gmail.com')
        cy.get('input[type="password"]').type('Saeed123@');
        cy.get('button[class="btn btn-lg btn-primary pull-xs-right"]').click();
    })

    it('Post a new Post',()=>{
        cy.contains('New Post').click();
    })
})