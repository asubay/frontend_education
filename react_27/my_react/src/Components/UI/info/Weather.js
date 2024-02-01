import CityWeather from "./CityWeather";

export default function Weather(props) {
    return (
       <CityWeather{...props}/>
    );
}