describe('Test the Slider ',()=>{
    it('Testing slider by change value and update the display value',()=>{
        cy.visit('https://demoqa.com/slider')

        const valueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            'value',
          ).set
          
          cy.get('#sliderContainer input[type=range]')
            .should('have.value', 25)
            .then(function ($slider) {
              valueSetter.call($slider[0], 84)
            })
            .trigger('change')
          
    })
})