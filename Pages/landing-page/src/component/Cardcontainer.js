import React from 'react'
import "./Cardcontainer.css"
import Card from './Card'
import bookicon from "../assets/bookIcon.png"
import bellicon from "../assets/bellIcon.png"
import questionicon from "../assets/questionMark.png"

const Cardcontainer = () => {
    const list = [
        {
            head: "Learn More",
            img: bookicon,
            alt: "book icon",
            text: "Find out more about earthquakes"
        },
        {
            head: "Quake Alert",
            img: bellicon,
            alt: "bell icon",
            text: "Monitoring using BMKG's API"
        },
        {
            head: "Upcoming",
            img: questionicon,
            alt: "question icon",
            text: "Stay tuned for upcoming updates"
        }
    ]
    return (
        <div className="Card-container">
            {list.map((list) => (
                    <Card head={list.head} img={list.img} alt={list.alt} text={list.text}/>
                )
            )}
        </div>
    )
}

export default Cardcontainer
