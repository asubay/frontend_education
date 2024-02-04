import CityWeather from "./Components/UI/info/CityWeather";
import Container from "./Components/UI/info/Container";

const cities = [{
    id: 1520316,
    cityName: 'Усть-Каменогорск',
    date: '01.02.2024',
    humidity: 94,
    temperature: '-15',
    feels_like: '-17',
    pressure: '735'
}, {
    id: 1520240,
    cityName: 'Павлодар',
    date: '01.02.2024',
    humidity: 87,
    temperature: '-13',
    feels_like: '-14',
    pressure: '745'
},
    {
        id: 1519422,
        cityName: 'Семей',
        date: '01.02.2024',
        humidity: 67,
        temperature: '-6',
        feels_like: '-6',
        pressure: '749'
    }]

export default function CityInfo() {

    return (
        <Container>
            {
                cities.map((item) => <CityWeather key={item.id} {...item} />)
            }
        </Container>
    );
}