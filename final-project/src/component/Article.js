import React from 'react'
import "./Article.css"
import earthquake from "../assets/earthquakes.jpg"

const Article = () => {
    return (
        <div className="Container">
            <div className="Article">
                <div className="flexbox">
                    <div className="textbox">
                        <h1 className="title">What Are Earthquakes?</h1>
                        <br />
                        <p className="info">An earthquake is what happens 
                            when two blocks of the earth 
                            suddenly slip past one another.  
                            The surface where they slip is 
                            called the fault or fault plane. 
                            The location below the earth’s 
                            surface where the earthquake 
                            starts is called the hypocenter, 
                            and the location directly above it 
                            on the surface of the earth is 
                            called the epicenter.</p>
                    </div>
                    <div className="imgbox">
                        <img className="img" src={earthquake} alt="earthquakes" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
