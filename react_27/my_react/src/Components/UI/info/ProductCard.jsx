import React from 'react';
import  './Style.css'

function ProductCard({ image, name, title, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} width={200}/>
            <h3>{title}</h3>
            <h3>price: {price}</h3>
        </div>
    );
}

export default ProductCard;