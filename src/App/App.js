import './App.css';
import Main from '../Main/Main';
import Details from '../Details/Details';
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
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
