import "./Quake.css"
import React from 'react'
import { useState } from "react"

const Quake = (pops) => {
    const [Info, setInfo] = useState({})

    const BmkgAPI = () =>{
        fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data.Infogempa.gempa);
                setInfo(data.Infogempa.gempa)
            }) 
    }

    return (
        <div className="flexbox">
            <div className="info">
                <h1>Latest Info Provided by BMKG Autogempa API</h1>
                <p>Tanggal: {Info.Tanggal}</p>
                <p>Jam: {Info.Jam}</p>
                <p>Koordinat: {Info.Coordinates}</p>
                <p>Magnitudo: {Info.Magnitude}</p>
                <p>Kedalaman: {Info.Kedalaman}</p>
                <p>Wilayah: {Info.Wilayah}</p>
                <p>Potensi: {Info.Potensi}</p>
                <p>Dirasakan: {Info.Dirasakan}</p>
                <div>
                    <button onClick={BmkgAPI}>Refresh Data</button>
                </div>
            </div>
            <div className="pic">
                <div>
                    <img className="shakemap" src={"https://data.bmkg.go.id/DataMKG/TEWS/" + Info.Shakemap} />
                </div>
            </div>
        </div>
    )
}

export default Quake
