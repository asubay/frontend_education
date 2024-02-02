import CityWeather from "./Components/UI/info/CityWeather";
import Container from "./Components/UI/info/Container";

const cities = [{
    cityName: 'Усть-Каменогорск',
    date: '01.02.2024',
    humidity: 94,
    temperature: '-15',
    feels_like: '-17',
    pressure: '735'
},{
    cityName: 'Усть-Павлодар',
    date: '01.02.2024',
    humidity: 87,
    temperature: '-13',
    feels_like: '-14',
    pressure: '745'
}]

export default function Profile() {

    return (
        <Container>
            {
                cities.map(item => <CityWeather {...item}/>)
            }
        </Container>
    );
}