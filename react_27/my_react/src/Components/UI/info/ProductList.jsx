import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";

export default function ProductList({list, title}) {

    return (
        <Container>
            <h1>{title}</h1>
            {list.map((product) => (
                <ProductCard key={product.id}
                             image={product.image}
                             name={product.name}
                             title={product.title}
                             price={product.price}

                />
            ))}
        </Container>
    );
}