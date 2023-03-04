import Card from "../Card/Card";

const Deck = ({ removeFromDeck, deck }) => {

    const showDeck = () => {
        return deck.map((card) => (
            <div key={`${card.id}`}>
                <Card
                    img={card.imageUrl}
                    id={`${card.id}`}
                    name={card.name}
                />
                <br></br>
                <button onClick={() => removeFromDeck(card.id)}>Remove from Deck</button>
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
