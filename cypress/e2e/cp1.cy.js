/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';


describe("Basic Tests",()=>{

   
   it("visit the site",function(){

const birthdate = faker.date.birthdate();
const month = String(birthdate.getMonth()+1).padStart(2, '0');
 const bod = `${month}-${String(birthdate.getDate()).padStart(2,'0')}-${birthdate.getFullYear()}`;

cy.log(bod);
      
      // const birthdate = faker.date.birthdate().toLocaleDateString('en-US', {
      //    month: 'short',
      //    day: 'numeric',
      //    year: 'numeric',
      //  });
      // cy.log(birthdate);
      // cy.log(faker.person.sex());
    

      
    




   })

})

