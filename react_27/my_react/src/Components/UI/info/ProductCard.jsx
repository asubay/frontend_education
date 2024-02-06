import React from 'react';
import  './Style.css'

function ProductCard({ image, name, title, price, rating, count }) {
    return (
        <div className="product-card">
            <img src={image} alt={name}/>
            <h3>{title}</h3>
            <h3>price: {price}$</h3>
            <h3>rating: {rating}</h3>
            <h3>bought count: {count}</h3>
        </div>
    );
}

export default ProductCard;