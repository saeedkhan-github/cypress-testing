import { resolve } from "path";

describe('Testing Sample',()=>{

    it.skip('Testing Running ',()=>{
        const getName=()=>{
            return 'Saeed Khan';
        }
        cy.wrap({name:getName}).invoke('name').should('eq','Saeed Khan');
    })
    const myPromise = new Promise((resolve, reject) => {
        // we use setTimeout(...) to simulate async code.
        setTimeout(() => 
        {
          resolve({ type: 'success',
            message: 'It worked!',
          })
        }, 2500)
      })
      
      it('should wait for promises to resolve', () => {
        cy.wrap(myPromise).its('message').should('eq', 'It worked!')
      })
})