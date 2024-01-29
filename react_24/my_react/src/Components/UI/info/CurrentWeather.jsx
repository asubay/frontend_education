import React, {useState, useEffect} from 'react';
import classes from './CurrentWeather.module.css'

let cityId = '1520316';
let apiKey = '4222cfb522ed67a29335cde31582d89b';
const CurrentWeather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&lang=ru&appid=${apiKey}`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setWeatherData(data);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    });
    return (
        <div>
            <h2>Прогноз погоды в Усть-Каменогорске на ближайшие 5 дней</h2>

            {weatherData && (
                <div>
                    <table className={classes.whetherTable}>
                        <thead>
                        <tr>
                            <th>Дата и время</th>
                            <th>Температура (°C)</th>
                            <th>Ощущается как (°C)</th>
                            <th>Влажность (%)</th>
                            <th>Давление (Па)</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                        <tbody>
                        {weatherData.list.map((item) => (
                            <tr key={item.dt}>
                                <td>{new Date(item.dt * 1000).toLocaleDateString()} {new Date(item.dt * 1000).toLocaleTimeString()}</td>
                                <td>{item.main.temp}</td>
                                <td>{item.main.feels_like}</td>
                                <td>{item.main.humidity}</td>
                                <td>{item.main.pressure}</td>
                                <td>{item.weather[0].description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default CurrentWeather;