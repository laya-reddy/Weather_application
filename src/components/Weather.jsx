import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";

function Weather() {
    const apiKey = "14d2a6eeac807c762555d2c958bc0f12";
    
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    const handleKey = (event) => {
        if(event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                // console.log(response.data);
            })
        }
    }

    return (
        <div>
            <div className="navbar">
                <input 
                    type="text" 
                    className="location" 
                    placeholder="Search Location" 
                    onChange={event => setLocation(event.target.value)} 
                    value={location} 
                    onKeyPress={handleKey} 
                />
            </div>
            <div className="temperature">
                <div className="temp">
                    {data.main && <p>{data.main.temp} &deg;C</p>}
                </div>
                <div className="weather">
                    {data.weather && <p>{data.weather[0].main}</p>}
                </div>
            </div>
            <div className="tabs">
                <div className="info">
                    {
                        data.main &&
                        <div>
                            <p className="bold">Feels Like</p>
                            <p className="data">{data.main.feels_like} %</p>
                        </div>
                    }
                </div>
                <div className="info">
                    {
                        data.main &&
                        <div>
                            <p className="bold">Humidity</p>
                            <p className="data">{data.main.humidity} %</p>
                        </div>
                    }
                </div>
                <div className="info">
                    {
                        data.main &&
                        <div>
                            <p className="bold">Wind Speed</p>
                            <p className="data">{data.wind.speed} kmph</p>
                        </div>
                    }
                </div>
            </div>
            <div className="footer">
                <p>&copy; Adesh Yearanty, 2024</p>
            </div>
        </div>
    );
}

export default Weather;
