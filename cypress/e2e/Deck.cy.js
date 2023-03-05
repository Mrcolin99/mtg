describe('Deck Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.intercept({
            url: 'https://api.magicthegathering.io/v1/cards?page=1',
            method: 'GET'
        }, { fixture: 'cards' })
    })
    it('should go to an empty deck page', () => {
        cy.get('.deck-link').click()
        cy.get('p').contains('No cards in deck')
    })
    it('should be able to add a card to the deck', () => {
        cy.intercept({
            url: 'https://api.magicthegathering.io/v1/cards/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c',
            method: 'GET'
          }, { fixture: 'details' })
          cy.get('.cards > :nth-child(1) > a').click()
          cy.get('.add-button').click()
          cy.get('.deck-link').click()
          cy.get('.card-container').contains('Remove')
    })
    it('should be able to remove a card to the deck', () => {
        cy.intercept({
            url: 'https://api.magicthegathering.io/v1/cards/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c',
            method: 'GET'
          }, { fixture: 'details' })
          cy.get('.cards > :nth-child(1) > a').click()
          cy.get('.add-button').click()
          cy.get('.deck-link').click()
          cy.get('.card-container').contains('Remove')
          cy.get('.remove-button').click()
          cy.get('p').contains('No cards in deck')
    })
})