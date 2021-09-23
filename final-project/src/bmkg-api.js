import React from "react";
import moment from "moment";

fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
        .then( (response) => response.json())
        .then((data) => process(data))

        function process(data){
            console.log(data)
            var mag = document.getElementById("mag")
            var ti = document.getElementById("time")
            var map = document.getElementById("map")
            var wil = document.getElementById("wil")
            mag.innerHTML = data.Infogempa.gempa.Magnitude
            ti.innerHTML = moment(data.Infogempa.gempa.DateTime).fromNow()
            map.innerHTML = "<img src='https://data.bmkg.go.id/DataMKG/TEWS/"+data.Infogempa.gempa.Shakemap+"'>"
            wil.innerHTML = data.Infogempa.gempa.Dirasakan
}