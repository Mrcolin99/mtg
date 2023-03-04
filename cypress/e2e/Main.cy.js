describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should display cards', () => {
    cy.wait(5000)
    cy.get('.cards > :nth-child(2) > div')
  })
  
})