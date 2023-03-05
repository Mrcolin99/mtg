import { Link } from "react-router-dom"
import './Card.css'

const Card = ({ img, id, name }) => {
    return (
        img ?
            <Link to={`/details/${id}`} state={{ id: id }}>
                <img className='reg-card' src={img} id={id} alt={name} />
            </Link>
            :
            <div className='no-image'>
                <h2 id={id}>No Image Available For {name}</h2>
                <Link to={`/details/${id}`} state={{ id: id }}>
                    <p className='no-img-link'>Click For More</p>
                </Link>
            </div>
  )

}

export default Card