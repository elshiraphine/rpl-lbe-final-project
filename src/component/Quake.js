/* eslint-disable jsx-a11y/alt-text */
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
                <div className="list">
                    <table>
                        <tr>
                            <td>Tanggal</td>
                            <td>:</td>
                            <td>{Info.Tanggal}</td>
                        </tr>
                        
                        <tr>
                            <td>Jam</td>
                            <td>:</td>
                            <td>{Info.Jam}</td>
                        </tr>
                        
                        <tr>
                            <td>Koordinat</td>
                            <td>:</td>
                            <td>{Info.Coordinates}</td>
                        </tr>

                        <tr>
                            <td>Magnitudo</td>
                            <td>:</td>
                            <td>{Info.Magnitude}</td>
                        </tr>

                        <tr>
                            <td>Kedalaman</td>
                            <td>:</td>
                            <td>{Info.Kedalaman}</td>
                        </tr>

                        <tr>
                            <td>Wilayah</td>
                            <td>:</td>
                            <td>{Info.Wilayah}</td>
                        </tr>

                        <tr>
                            <td>Potensi</td>
                            <td>:</td>
                            <td>{Info.Potensi}</td>
                        </tr>

                        <tr>
                            <td>Dirasakan</td>
                            <td>:</td>
                            <td>{Info.Dirasakan}</td>
                        </tr>
                    
                    </table>
                </div>
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
