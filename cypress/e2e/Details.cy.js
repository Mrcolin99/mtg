describe('Details Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.intercept({
            url: 'https://api.magicthegathering.io/v1/cards?page=1',
            method: 'GET'
          }, { fixture: 'cards' })
    })
    it('should got to the details page', () => {
        cy.intercept({
            url: 'https://api.magicthegathering.io/v1/cards/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c',
            method: 'GET'
          }, { fixture: 'details' })
          cy.get('.cards > :nth-child(1) > a').click()
          cy.get('.card-div > :nth-child(6)').contains('Details: First strike (This creature deals combat damage before creatures without first strike.)')
    })
    it('should have a header', () => {
        cy.intercept({
            url: 'https://api.magicthegathering.io/v1/cards/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c',
            method: 'GET'
          }, { fixture: 'details' })
          cy.get('.cards > :nth-child(1) > a').click()
          cy.get('.title').contains('MTG Deck Builder')
    })
    it('should have an error message', () => {
        cy.intercept(
            'GET',
            'https://api.magicthegathering.io/v1/cards/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c',
            {statusCode: 404})
            cy.get('.cards > :nth-child(1) > a').click()
            cy.get('.main-div > :nth-child(2) > h3').contains('There was an error loading this card please return to the home page')
    })
})