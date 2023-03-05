import { fetchAll } from '../../apiCalls'
import './Main.css'
import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'


const Main = () => {
    const [cards, setCards] = useState([])
    const [number, setNumber] = useState(1)
    const [type, setType] = useState('')
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [loadError, setLoadError] = useState(false)

    useEffect(() => {
        fetchAll(number, type)
            .then(data => {
                setCards(data.cards)
            })
            .catch(error => {
                console.log(error)
                setLoadError(true)
            })
    }, [number, type, loadError])

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

    const handleTypeChange = (event) => {
        setType(event.target.value)
        setLoadError(false)
      }

    return (
        <div>
            <form className='page-form'>
                <label htmlFor='page'>Jump to Page: </label>
                <input className='input-bar' id='page' name='page' onChange={holdInput} value={input} />
                <button className='submit' onClick={jumpTo}>Go</button>
            </form>
            <select className='type' name='type' id='type' onChange={handleTypeChange}>
                <option value=''>All</option>
                <option value='Artifact'>Artifact</option>
                <option value='Conspiracy'>Conspiracy</option>
                <option value='Creature'>Creature</option>
                <option value='Dragon'>Dragon</option>
                <option value='Elemental'>Elemental</option>
                <option value='Enchantment'>Enchantment</option>
                <option value='Goblin'>Goblin</option>
                <option value='Hero'>Hero</option>
                <option value='instant'>instant</option>
                <option value='Instant'>Instant</option>
                <option value='Jaguar'>Jaguar</option>
                <option value='Knights'>Knights</option>
                <option value='Land'>Land</option>
                <option value='Phenomenon'>Phenomenon</option>
                <option value='Plane'>Plane</option>
                <option value='Planeswalker'>Planeswalker</option>
                <option value='Scheme'>Scheme</option>
                <option value='Sorcery'>Sorcery</option>
                <option value='Stickers'>Stickers</option>
                <option value='Summon'>Summon</option>
                <option value='Tribal'>Tribal</option>
                <option value='Universewalker'>Universewalker</option>
                <option value='Vanguard'>Vanguard</option>
                <option value='Wolf'>Wolf</option>
            </select>
            {error && (
                <p>{input || 'Nothing'} is not a vaild page number. Please enter a valid page number between 1 and 787.</p>
            )}
            <div className='page-cntrl'>
                <p>Page Number: {number}</p>
                <button className='prev' onClick={prevPage}>Previous Page</button>
                <button className='next' onClick={nextPage}>Next Page</button>
            </div>
            <br></br>
            <div className='cards'>
                {!loadError ? showCards() :
                    <h1>Error Loading Cards Please Refresh The Page...</h1>}
            </div>
        </div>
    );
}

export default Main