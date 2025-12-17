import "./Card.css";

const Card = (props) => {
    return (
        <div id="card" style={{ backgroundImage: `url(${props.imagePath})`}}>
             <h3>{props.title.toUpperCase()}</h3>
        </div>
    )
}

export default Card;