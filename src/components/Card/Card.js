import { Link } from "react-router-dom";

const Card = ({ img, id, name }) => {
    return (
        img ?
            <Link to={`/details/${id}`} state={{ id: id}}>
                <img src={img} id={id} alt={name} />
            </Link>
            :
            <div>
                <h2 id={id}>No Image Available For {name}</h2>
                <Link to={`/details/${id}`} state={{ id: id}}>
                    <p>Click For More</p>
                </Link>
            </div> 
    );
       
};

export default Card;