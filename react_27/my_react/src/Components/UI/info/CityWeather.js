export default function CityWeather({cityName, date, temperature, feels_like, humidity, pressure}) {
    return (
        <div>
            <h3>Прогноз погоды в {cityName} на {date}</h3>
            <p>Температура воздуха: {temperature}</p>
            <p>Ощущается как (°C): {feels_like}</p>
            <p>Влажность (%): {humidity}</p>
            <p>Давление (Па): {pressure}</p>
        </div>
    );
}