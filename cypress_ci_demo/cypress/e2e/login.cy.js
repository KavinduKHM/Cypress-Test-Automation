describe('Login Test', () => {

  it('should login successfully', () => {

    cy.visit('index.html')

    cy.get('#username').type('admin')
    cy.get('#password').type('1234')

    cy.get('#loginBtn').click()

  })

})