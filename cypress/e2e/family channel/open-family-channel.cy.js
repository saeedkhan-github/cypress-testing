describe('My First Test', () => {
    it('click on alert',()=>{
        cy.visit('https://webapp.hucu.us/login');
        cy.get('.fluid > input').type('omar');
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

        //open family channel
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(4000)
        cy.get('.family-channel-toggle-switch-container').click()

        //send message
        cy.get('#messageInput').type('Test Message')
        cy.get('.tiny > .ui').click()
        cy.wait(5000)

        //send gif
        cy.get('#gifs_button_ref').click()
        cy.get('[style="background-color: rgb(238, 238, 238); width: 120px; height: 120px; position: absolute; top: 0px; left: 0px;"] > [data-testid="ImageItemImage"]').click()
        cy.get('.tiny > .ui').click()

         //send multiple gif
         cy.get('#gifs_button_ref').click()
         cy.get('[style="background-color: rgb(238, 238, 238); width: 120px; height: 120px; position: absolute; top: 0px; left: 0px;"] > [data-testid="ImageItemImage"]').click()
         cy.wait(5000)
         cy.get('#gifs_button_ref').click()
         cy.get('[style="background-color: rgb(238, 238, 238); width: 120px; height: 120px; position: absolute; top: 0px; left: 125px;"] > [data-testid="ImageItemImage"]').click()
         cy.wait(5000)
         cy.get('.tiny > .ui').click()

         //Send Voice Message
         cy.get('.message-actions > .tiny').click()
         cy.wait(10000)
         cy.get('.VoiceClipRecorder_buttonOK__1xIoQ').click()
         cy.wait(10000)
         cy.get('.tiny > .ui').click()
         cy.wait(5000)

         //Play voice message
         cy.get('.AudioPlayer_audioPlayer__2HGFE > .ui')
         cy.get(':nth-child(4) > .msg_attachment_style > .AudioPlayer_audioPlayer__2HGFE > .ui').click()
        

    })

})

