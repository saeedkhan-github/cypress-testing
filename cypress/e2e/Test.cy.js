// 

describe('Testing API',()=>{
    it('API testing',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')

        let message = 'whoa, this comment does not exist'

        // Listen to GET to comments/1
        cy.intercept('GET', '**/comments/*').as('getComment')
        
        // we have code that gets a comment when
        // the button is clicked in scripts.js
        cy.get('.network-btn').click()
        
        // https://on.cypress.io/wait
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
    })
})