const Deck = ({ removeFromDeck, deck }) => {

    const showDeck = () => {
        return deck.map((card) => (
            <div key={card.id}>
                <img
                    src={card.imageUrl}
                    id={card.id}
                    alt={card.name}
                />
                <br></br>
                <button onClick={() => removeFromDeck(card.id)}>Remove from Deck</button>
                <br></br>
            </div>
        ))
    }

    return (
        <div>
            {deck.length > 0 ? showDeck() :
                <p>No cards in deck</p>}
        </div>
    )
}

export default Deck