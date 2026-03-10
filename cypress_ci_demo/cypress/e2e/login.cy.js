describe('Login Test', () => {

  it('should login successfully', () => {

    cy.visit('index.html')

    cy.get('#username').type('admin')
    cy.get('#password').type('12345')

    cy.get('#loginBtn').click()

  })

})