/// <reference types="cypress" />

// login just once using API
let user

before(function fetchUser () {
  cy.request('POST', 'https://api.hucu.us/api/v2/login', {
    username: Cypress.env('username'),
    password: Cypress.env('password'),
  })
  .its('body')
  .then((res) => {
    user = res
  })
})

// but set the user before visiting the page
// so the app thinks it is already authenticated
beforeEach(function setUser () {
  cy.visit('/', {
    onBeforeLoad (win) {
      // and before the page finishes loading
      // set the user object in local storage
      win.localStorage.setItem('user', JSON.stringify(user))
    },
  })
  // the page should be opened and the user should be logged in
})

describe('JWT', () => {
  it('makes authenticated request', () => {
  // we can make authenticated request ourselves
  // since we know the token
    cy.request({
      url: 'https://api.hucu.us/api/v2/entities/493/locations/1061/patients',
      auth: {
        bearer: user.token,
      },
    })
    .its('body')
  })
  
})