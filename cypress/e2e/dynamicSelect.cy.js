describe('Select dynamic Value in the Select Inputbox',()=>{
    it('Testing Dynamic select option',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //.inputs.ui-autocomplete-input
        cy.get('.inputs.ui-autocomplete-input').type('Pa').get('.ui-menu-item-wrapper').each((el,index)=>{

            if(el.text()==="Panama")
            {
                cy.wrap(el).click();
            }
        })
        cy.get('[for="radio2"]').click();
     
    })
})