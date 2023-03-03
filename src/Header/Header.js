import { Link } from "react-router-dom"
import Main from "../Main/Main"

const Header = () => {
    return (
        <Link to='/' element={<Main />}>
            <h1>MTG Deck Builder</h1>
        </Link>
    )
}

export default Header