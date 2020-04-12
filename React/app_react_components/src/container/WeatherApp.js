import React, { useState } from 'react';
import { getWeatherinfo } from '../API';
import Toast from '../components/Toast';


export default function WeatherApp(props) {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const searchApi = async () => {
        const { data } = await getWeatherinfo(city);
        setWeather(data);
        console.log('Request AJAX', data);
    }

    return (
        <div>
            <input type="text" name="city" placeholder="Enter city name" onChange={e => setCity(e.target.value)} value={city}/>
            <button type="button" onClick={searchApi}>Search</button>
            <hr/>
            <Toast message="Toast Example" delay={3000} color="danger"/>
            { weather && weather.current ? 
                <div className="weather-infor">
                    <h1> {weather.current.weather_descriptions[0]} </h1>
                    <img src={weather.current.weather_icons[0]} alt=""/>
                    <h4>{weather.current.temperature}°C</h4>
                </div>
                : <p>Not yet</p>
            }
        </div>

    );
}