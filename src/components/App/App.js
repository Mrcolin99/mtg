import './App.css';
import Main from '../Main/Main';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Deck from '../Deck/Deck';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  const [deck, setDeck] = useState([])


  window.addEventListener('load', () => {
    if (localStorage.getItem('deck')) {
      setDeck(JSON.parse(localStorage.getItem('deck')))
    }
  })

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('deck', JSON.stringify(deck))
  })

  const addToDeck = (card) => {
    setDeck([...deck, card])
  }

  const removeFromDeck = (id) => {
    setDeck(deck.filter((card) => card.id !== id))
  }

  return (
    <div className='main-div'>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/details/:id' element={<Details addToDeck={addToDeck} />} />
            <Route path='/deck' element={<Deck removeFromDeck={removeFromDeck} deck={deck} />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;
