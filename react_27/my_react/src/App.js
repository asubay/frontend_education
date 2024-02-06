import React from "react";
import ProductList from "./Components/UI/info/ProductList";
import {data} from "./Components/UI/info/data";

export default function CityInfo() {
    const electronic = data.filter((item) => item.category === "electronics");
    const chipStaff = data.filter((item) => item.price < 50);
    return (
        <div>
            <ProductList list={electronic} title={"Electronics"}/>
            <hr/>
            <ProductList list={chipStaff} title={"Cheap things"}/>
        </div>
    );
}