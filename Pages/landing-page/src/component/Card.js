import React from 'react'
import bookicon from "../assets/bookIcon.png"
import bellicon from "../assets/bellIcon.png"
import questionicon from "../assets/questionMark.png"
import "./Card.css"

const Card = (props) => {

    return (
        <div className="container">
            <h1>{props.head}</h1>
            <div className="image-container">
                <img src={props.img} alt={props.alt} />
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default Card