import CityWeather from "./Components/UI/info/CityWeather";
import Container from "./Components/UI/info/Container";
export default function Profile() {
    return (
        <Container>
            <CityWeather cityName={'Усть-Каменогорск'}
                         date={'01.02.2024'}
                         humidity={94}
                         temperature={'-15'}
                         feels_like={'-17'}
                         pressure={'745'}
            />
            <CityWeather cityName={'Павлодар'}
                         date={'01.02.2024'}
                         humidity={71}
                         temperature={'-10'}
                         feels_like={'-11'}
                         pressure={'735'}
            />
        </Container>
    );
}