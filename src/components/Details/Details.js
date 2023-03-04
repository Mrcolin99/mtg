import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchCard } from "../../apiCalls"
import loadingGif from '../../Assets/loading-gif.gif'

const Details = ({ addToDeck }) => {
    const location = useLocation()
    const id = location.state
    const [card, setCard] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadError, setLoadError] = useState(false)

    useEffect(() => {
        fetchCard(id.id)
            .then(data => {
                setCard(data.card)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                setLoadError(true)
            })
    }, [id.id])

    if (loading) {
        return <img src={loadingGif} ></img>
    }

    const handleAddToDeck = () => {
        addToDeck(card)
    }

    return (
        <div>
            {!loadError ?
                <div>
                    <img src={card.imageUrl} alt={card.name}></img>
                    <h3>{card.name}</h3>
                    <p>Mana cost: {card.manaCost}</p>
                    <p>Converted mana cost: {card.cmc}</p>
                    <p>Type: {card.type}</p>
                    <p>Details: {card.text}</p>
                    <button onClick={handleAddToDeck}>Add To Deck</button>
                </div>
                : <h1>There was an error loding this card</h1>}
        </div>
    )
}

export default Details
