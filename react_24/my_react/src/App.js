import MyButton from "./Components/UI/buttons/MyButton";
import classes from './Components/Styles/App.module.css'
import CurrentWeather from "./Components/UI/info/CurrentWeather";
import React, { useState } from 'react';
function App() {
    const [currentDate, setCurrentDate] = useState(null);

    const handleButtonClick = () => {
        const now = new Date();
        setCurrentDate(now.toLocaleString());
    };
       return (
        <div className="App">
            <div className={classes.container}>
                <MyButton onClick={handleButtonClick} text={'текущая дата'}></MyButton>
                {currentDate && <p>Сейчас в городе Усть-Каменогорск: {currentDate}</p>}
                <CurrentWeather/>br
            </div>
        </div>
    );
}

export default App;
