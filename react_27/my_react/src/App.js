import React from "react";
import ProductList from "./Components/UI/info/ProductList";
import {data} from "./Components/UI/info/data";
import "./Components/UI/info/Style.css"

export default function CityInfo() {
    const electronic = data.filter((item) => item.category === "electronics");
    const chipStaff = data.filter((item) => item.price < 50);
    const popular = data.filter((item) => item.rating.rate>=4 && item.rating.count>=300);

    return (
        <div className={"container"}>
            <h1>Online shop</h1>
            <div className={"form-field-group"}>
                <h2>Electronics</h2>
                <ProductList list={electronic}/>
            </div>

            <div className={"form-field-group"}>
                <h2>Cheap staff</h2>
                <ProductList list={chipStaff}/>
            </div>

            <div className={"form-field-group"}>
                <h2>Most popular staff</h2>
                <ProductList list={popular}/>
            </div>

        </div>
    );
}