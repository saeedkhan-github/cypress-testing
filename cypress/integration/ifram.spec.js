/// <reference types="cypress"/>



describe('Testing Iframs', () => {
    it('get ifram body and type text', () => {
    //   expect(true).to.equal(true)
        cy.visit('https://the-internet.herokuapp.com/tinymce')

        const ifrm=cy.get('#mce_0_ifr').its('0.contentDocument.body').then(cy.wrap);
    
            ifrm.clear().type('Welcom to ifram testing{ctrl+a}')

            cy.get('[aria-label="Bold"] > .tox-icon > svg').click();


    })

    it.only('Using ifram plugin',()=>{
      cy.visit('https://the-internet.herokuapp.com/tinymce')

      // cy.frameLoaded('#mce_0_ifr');
      cy.iframe('#mce_0_ifr').clear().type("using cypress ifram plugin");
    })
    
  })


//   cy.iframe('#iframe1').then($iframe => {
//     // Interact with the iframe content
//     $iframe.find('#username').type('JohnDoe')
//     $iframe.find('#password').type('Secret123')
//     $iframe.find('#login-button').click()