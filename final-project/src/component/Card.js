import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = (props) => {

    return (
        <Link to={props.link} className="card">
            <h1 className="card-title">{props.head}</h1>
            <div className="image-container">
                <img src={props.img} alt={props.alt} />
            </div>
            <p className="card-info">{props.text}</p>
            <div className="shadow-prop"></div>
        </Link>
    )

    
}

export default Card