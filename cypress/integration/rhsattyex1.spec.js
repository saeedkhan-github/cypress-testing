/// <reference types="cypress"/>
describe('Automation Practice Webpage', () => {
  it('should navigate to the webpage', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })

  it('should select and verify the checkboxes', () => {
    cy.get('#checkBoxOption1').check().should('be.checked')
    cy.get('#checkBoxOption2').check().should('be.checked')
    cy.get('#checkBoxOption3').check().should('be.checked')

    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
    cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
  })

  it('should select and verify the radio buttons', () => {
    cy.get('#radioButton').check('radio1').should('be.checked')
    cy.get('#radioButton').check('radio2').should('be.checked')
  })

  it('should select and verify the static dropdown', () => {
    cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1')
    cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
    cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3')
  })

  it('should select and verify the dynamic dropdown', () => {
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
      if ($e1.text() === 'India') {
        $e1.trigger('click')
      }
    })
    cy.get('#autocomplete').should('have.value', 'India')
  })

  it('should verify if the Alert is displayed and accept it', () => {
    cy.get('#alertbtn').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
  })

  it('should verify if the new window is opened and switch to it', () => {
    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'rahulshettyacademy.com/#/index')
    cy.go('back')
  })

  it('should interact with the mouse hover and verify the text', () => {
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include', '#top')
  })
})
