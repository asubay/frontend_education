import MyButton from "./Components/UI/buttons/MyButton";
import classes from './Components/Styles/App.module.css'
import CurrentWeather from "./Components/UI/info/CurrentWeather";

function App() {
       return (
        <div className="App">
            <div className={classes.container}>
                <CurrentWeather/>
                <MyButton>текущая дата</MyButton>
            </div>
        </div>
    );
}

export default App;
