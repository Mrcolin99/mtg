import './App.css';
import Main from '../Main/Main';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Deck from '../Deck/Deck';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  return (

    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/deck' element={<Deck />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
