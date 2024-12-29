describe('API Test for restful-api.dev', () => {
    it('should fetch objects and validate the first ID and name', () => {
      // Define the API endpoint
      const apiUrl = 'https://api.restful-api.dev/objects';
  
      // Send a GET request
      cy.request('GET', apiUrl).then((response) => {
        // Assert the status code
        expect(response.status).to.eq(200);
  
        // Assert that the body is an array
        expect(response.body).to.be.an('array');
  
        // Validate the first object in the response
        if (response.body.length > 0) {
          const firstObject = response.body[0];
          
          // Assert that the first object's id is 1
          expect(Number(firstObject.id)).to.eq(1);
  
          // Assert that the first object's name is "John"
          expect(firstObject).to.have.property('name', 'Google Pixel 6 Pro');
  
          // Log the first ID and name
          cy.log(`First ID: ${firstObject.id}, Name: ${firstObject.name}`);
          console.log(`First ID: ${firstObject.id}, Name: ${firstObject.name}`);
        } else {
          // Log if the response array is empty
          cy.log('The response array is empty.');
          console.log('The response array is empty.');
        }
      });
    });
  });
  