import fetchAll from '../apiCalls';
import React, { useState, useEffect } from 'react';

const Main = () => {
    const [cards, setCards] = useState([{name: 'Loading...'}, {name: 'Please Wait...'}])

  useEffect(() => {
    fetchAll()
      .then(data => {
        setCards(data.cards)
      })
  }, [])

  const showCards = () => {
    return cards.map(card => {
      return <div>
        <img src={card.imageUrl}></img>
        </div>
    })
  }


  return (
    <div>
      <p>Welcome</p>
      {showCards()}
    </div>
  );
}

export default Main