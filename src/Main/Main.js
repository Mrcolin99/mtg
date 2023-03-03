import fetchAll from '../apiCalls';
import './Main.css'
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';


const Main = () => {
    const [cards, setCards] = useState([])
    const [number, setNumber] = useState(1)
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

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
        if (number < 787) {
            setNumber(number + 1)
            setError(false)
        }
    }

    const prevPage = () => {
        if (number > 1) {
            setNumber(number - 1);
            setError(false)
        }
    }

    const holdInput = (event) => {
        setInput(event.target.value)
    }

    const jumpTo = (event) => {
        event.preventDefault()
        if (input >= 1 && input <= 787) {
            setNumber(input)
            setInput('')
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor='page'>Jump to Page: </label>
                <input id='page' name='page' onChange={holdInput} value={input} />
                <button onClick={jumpTo}>Go</button>
            </form>
            {error && (
                <p>Please enter a valid page number between 1 and 787.</p>
            )}
            <div className='cards'>
                {showCards()}
                <div>
                    <p>Page Number: {number}</p>
                    <button onClick={prevPage}>Previous Page</button>
                    <button onClick={nextPage}>Next Page</button>
                </div>
            </div>
        </div>
    );
}

export default Main;

