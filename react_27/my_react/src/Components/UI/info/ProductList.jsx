import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";

export default function ProductList({list}) {

    return (
        <Container>
            {list.map((product) => (
                <ProductCard key={product.id}
                             image={product.image}
                             name={product.name}
                             title={product.title}
                             price={product.price}
                             rating={product.rating.rate}
                             count={product.rating.count}

                />
            ))}
        </Container>
    );
}