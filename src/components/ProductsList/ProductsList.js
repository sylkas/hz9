import React from "react";
import ProductsService from "../../services/products.service";
import Product from "../Product/Product";

const ProductsList = () => {
  const products = ProductsService.getProducts();
  return (
     <div className="products">
     {products.map(product => (
        <Product key={product.id}
        name={product.name}
        image={product.image}
        amount={product.amount}
        manufacture={product.manufacture}
    />
    ))}
    </div>  
  );
};

export default ProductsList;