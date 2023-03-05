describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept({
      url: 'https://api.magicthegathering.io/v1/cards?page=1',
      method: 'GET'
    }, { fixture: 'cards' })
  })
  it('should display cards', () => {
    cy.get('.cards > :nth-child(2) > div')
  })
  it('should be able to go to page 2', () => {
    cy.intercept({
      url: 'https://api.magicthegathering.io/v1/cards?page=2',
      method: 'GET'
    }, { fixture: 'cards2' })
    cy.get('.next').click()
    cy.get('#e11ae348-44d1-5d45-bc5c-99a44d2acd5c')
  })
  it('should be able to jump to any page', () => {
    cy.intercept({
      url: 'https://api.magicthegathering.io/v1/cards?page=50',
      method: 'GET'
    }, { fixture: 'cards50' })
    cy.get('#page').type('50')
    cy.get('.submit').click()
    cy.get('#c32d15c9-b980-556a-9771-2a087142153f')
  })
  it('should throw an error', () => {
    cy.intercept(
      'GET',
      'https://api.magicthegathering.io/v1/cards?page=1',
      {statusCode: 404})
      cy.get('.cards > h1').contains('Error Loading')
  })
  it('should not be able to go past page 787', () => {
    cy.get('#page').type('788')
    cy.get('.submit').click()
    cy.get('.main-div > :nth-child(2) > :nth-child(2)').contains('788 is not a vaild page number.')
  })
  it('should not be able to go below page 1', () => {
    cy.get('#page').type('0')
    cy.get('.submit').click()
    cy.get('.main-div > :nth-child(2) > :nth-child(2)').contains('0 is not a vaild page number.')
  })

})