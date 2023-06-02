import { Link } from "react-router-dom"
import './Card.css'
import noImage from "../../Assets/no-image2.gif"

const Card = ({ img, id, name }) => {
    return (
        img ?
            <Link to={`/details/${id}`} state={{ id: id }}>
                <img className='reg-card' src={img} id={id} alt={name} />
            </Link>
            :
            <div className='no-image'>
                <Link to={`/details/${id}`} state={{ id: id }}>
                    <img className='no-image-gif' src={noImage} />
                    <p className='no-img-link'>Click For More</p>
                </Link>
                <p>{name}</p>
            </div>
    )

}

export default Card