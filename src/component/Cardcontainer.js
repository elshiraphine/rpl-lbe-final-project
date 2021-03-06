import React from 'react'
import "./Cardcontainer.css"
import Card from './Card'
import bookicon from "../assets/vector/bookIcon.svg"
import bellicon from "../assets/vector/bellIcon.svg"
import questionicon from "../assets/vector/questionMark.svg"

const Cardcontainer = () => {
    const list = [
        {
            head: "Learn More",
            img: bookicon,
            alt: "book icon",
            text: "Find out more about earthquakes",
            link: "/learn"
        },
        {
            head: "Quake Alert",
            img: bellicon,
            alt: "bell icon",
            text: "Monitoring using BMKG's API",
            link: "/alert"

        },
        {
            head: "Upcoming",
            img: questionicon,
            alt: "question icon",
            text: "Stay tuned for upcoming updates",
            link: "/"
        }
    ]
    return (
        <div className="Card-container">
            {list.map((list) => (
                    <Card head={list.head} img={list.img} alt={list.alt} text={list.text} link={list.link}/>
                )
            )}
        </div>
    )
}

export default Cardcontainer
