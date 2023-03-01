import './App.css';
import fetchAll from '../apiCalls';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetchAll()
      .then(data => {
        console.log(data);
        setCards(data)
      })
  }, [])

  const showCards = () => {
    return cards.map(card => {
      return <p>{card.name}</p>
    })
  }

  return (
    <div>
      {showCards()}
    </div>
  );
}

export default App;
