const Card = ({img, id, name}) => {
    return (
      img ?
        <img src={img} id={id} alt={name} />
        :
        <div>
          <h2 id={id}>No Image Available For {name}</h2>
        </div>
    );
  };
  
  export default Card;