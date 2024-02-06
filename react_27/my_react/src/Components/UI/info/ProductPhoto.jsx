import React from 'react';

const ProductPhoto = ({width, height, url}) => {
    return (
        <div>
            <img src={url} width={width} height={height}/>
        </div>
    );
};

export default ProductPhoto;