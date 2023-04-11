import { Link } from 'react-router-dom'
import './PlayerCard.css'

const PlayerCard = (props) => {
    return(
        <div className="PlayerCard">
            <h2> {props.name} </h2>
            <h3> {props.role} </h3>
            <p> {props.description} </p>
            <Link to={`/edit/${props.id}`}> Edit Player</Link>
        </div>
    )
}

export default PlayerCard;