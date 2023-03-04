import './Deck.css'

const Deck = ({ removeFromDeck, deck }) => {

    const showDeck = () => {
        return deck.map((card) => (
            <div className='card-container' key={card.id}>
                <img
                    src={card.imageUrl}
                    id={card.id}
                    alt={card.name}
                />
                <br></br>
                <button className='remove-button' onClick={() => removeFromDeck(card.id)}>Remove from Deck</button>
                <br></br>
            </div>
        ))
    }

    return (
        <div className='deck-div'>
            {deck.length > 0 ? showDeck() :
                <p>No cards in deck</p>}
        </div>
    )
}

export default Deck