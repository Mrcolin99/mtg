import fetchAll from '../apiCalls';
import './Main.css'
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const Main = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetchAll()
            .then(data => {
                setCards(data.cards)
            })
    }, [])

    const showCards = () => {
        return cards.map(card => {
            return (
                <div className='card-container' key={card.number}>
                    <Card
                        img={card.imageUrl}
                        id={card.id}
                        name={card.name}
                    />
                </div>)
        })
    }


    return (
        <div className='cards'>
            {showCards()}
        </div>
    );
}

export default Main