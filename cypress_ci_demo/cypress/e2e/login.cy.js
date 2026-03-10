describe('Login Test', () => {

  it('should login successfully', () => {

    cy.visit('index.html')

    cy.get('#username').type('admin')
    cy.get('#password').type('12345')

    cy.get('#loginBtn').click()

  })

})

// login.cy.js
// add a comment
// CI test trigger