export class uploads{

    sendFile(filename='pic.jpeg'){
        // Attach the file, upload file via fixture, or direct upload by selectfile and path, 
      // The attachinput css display is non so use force ture / remove style attribute for the element
    
        // cy.fixture('pic.jpeg', { encoding: null }).as('myfixture')
        // cy.get('#attachInput').selectFile('cypress/fixtures/img.png',{ force: true })
        cy.get('input#attachInput').invoke('removeAttr', 'style').selectFile('cypress/fixtures/files/'+filename).
        then(()=>{
          cy.wait(2000);
          cy.get('.editor-attachment-name').should('be.visible');
          cy.get('.tiny > .ui').should('be.visible');
        })
        
            
    }

}