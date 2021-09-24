import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = (props) => {

    return (
        <Link to={props.link} className="container">
            <h1>{props.head}</h1>
            <div className="image-container">
                <img src={props.img} alt={props.alt} />
            </div>
            <p>{props.text}</p>
            <div className="shadow-prop"></div>
        </Link>
    )

    
}

export default Card