import React from "react";

const Product = ({name, image, amount, manufacture}) => {
    const alt = manufacture + ' ' + name;
    return (
        <div className="product">
            <img src={image} alt={alt}/>
            <p className="price">${amount}</p>
            <h3>{name}</h3>
        </div>
    );
  };

export default Product;