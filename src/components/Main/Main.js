import { fetchAll } from '../../apiCalls'
import './Main.css'
import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'


const Main = () => {
    const [cards, setCards] = useState([])
    const [number, setNumber] = useState(1)
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [loadError, setLoadError] = useState(false)

    useEffect(() => {
        fetchAll(number)
            .then(data => {
                setCards(data.cards)
            })
            .catch(error => {
                console.log(error)
                setLoadError(true)
            })
    }, [number, loadError])

    const showCards = () => {
        if (cards !== undefined) {
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
        } else { return <p>There was an error loading the cards, please refresh the page...</p> }
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
        setError(false)
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
            <form className='page-form'>
                <label htmlFor='page'>Jump to Page: </label>
                <input className='input-bar' id='page' name='page' onChange={holdInput} value={input} />
                <button className='submit' onClick={jumpTo}>Go</button>
            </form>
            {error && (
                <p>{input || 'Nothing'} is not a vaild page number. Please enter a valid page number between 1 and 787.</p>
            )}
            <div className='page-cntrl'>
                <p>Page Number: {number}</p>
                <button className='prev' onClick={prevPage}>Previous Page</button>
                <button className='next' onClick={nextPage}>Next Page</button>
            </div>
            <div className='cards'>
                {!loadError ? showCards() :
                    <h1>Error Loading Cards Please Refresh The Page...</h1>}
            </div>
        </div>
    );
}

export default Main;