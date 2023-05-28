/// <reference types="cypress"/>

import { faker } from 'node_modules/@faker-js/faker';

const firstName= faker.person.firstName();
const  lastName= faker.person.lastName();

describe('My First Test', () => {
    it('Does not do much!', () => {
    cy.log(firstName);
    cy.log(lastName);

     })
  })