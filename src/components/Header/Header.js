import { Link } from "react-router-dom"
import Main from "../Main/Main"
import Deck from "../Deck/Deck"

const Header = () => {
    return (
        <div>
            <Link to='/' element={<Main />}>
                <h1>MTG Deck Builder</h1>
            </Link>
            <Link to='/deck' element={<Deck />}>
                <h3>View Deck</h3>
            </Link>
        </div>
    )
}

export default Header