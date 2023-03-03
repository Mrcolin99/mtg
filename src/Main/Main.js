import fetchAll from '../apiCalls';
import './Main.css'
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';


const Main = () => {
    const [cards, setCards] = useState([])
    const [number, setNumber] = useState(1)

    useEffect(() => {
        fetchAll(number)
            .then(data => {
                setCards(data.cards)
            })
    }, [number])

    const showCards = () => {
        return cards.map(card => {
            return (
                <div className='card-container' key={card.number}>
                    <Card
                        img={card.imageUrl}
                        id={card.id}
                        name={card.name}
                    />
                </div>
            )
        })
    }

    const nextPage = () => {
        setNumber(number + 1)
    }

    const prevPage = () => {
        setNumber(number - 1)
    }


    return (
        <div className='cards'>
            {showCards()}
            <div>
                <p>Page Number: {number}</p>
                <button onClick={prevPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );
}

export default Main
