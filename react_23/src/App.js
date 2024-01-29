import React, {useState} from "react";
import CustomTable from "./Components/tables/CustomTable";
import "./Styles/App.css"
import MyButton from "./Components/buttons/MyButton";

function App() {
    const data = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 28 },
    ];

    return (
        <div className="App">
            <CustomTable post={{style: "my-tab", data: data}}/>
            <MyButton>click me</MyButton>
        </div>
    );
}

export default App;
