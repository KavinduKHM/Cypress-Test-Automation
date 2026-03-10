describe('Login Test', () => {

  it('should login successfully', () => {

    cy.visit('index.html')

    cy.get('#username').type('admin')
    cy.get('#password').type('12345')

    cy.get('#loginBtn').click()

  })

})

// login.cy.js
// This comment is added to demonstrate the login test case for Cypress. The test visits the index.html page, fills in the username and password fields, and clicks the login button.