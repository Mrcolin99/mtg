import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Deck = () => {
  const location = useLocation()
  const card = location.state
  const [deck, setDeck] = useState([])

  const addToDeck = () => {
    setDeck([...deck, card])
  };

  const showDeck = () => {
    return deck.map((card) => (
      <div key={card.id}>
        <img src={card.imageUrl} alt={card.name} />
        <button onClick={() => removeFromDeck(card.id)}>Remove from Deck</button>
      </div>
    ));
  };

  const removeFromDeck = (id) => {
    setDeck(deck.filter((card) => card.id !== id))
  };

  useEffect(() => {
        if(card) {
            addToDeck()
        }
  }, [])

  return (
    <div>
      {showDeck()}
    </div>
  )
}

export default Deck
