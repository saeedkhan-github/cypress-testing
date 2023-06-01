/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';
describe('My First Test', () => {
    it('click on alert',()=>{
     
        const Phone= faker.phone.number('+1##########')
        cy.log(Phone);
    })

    
  })