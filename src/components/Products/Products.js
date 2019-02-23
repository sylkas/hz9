import React from "react";
import ProductsService from "../../services/products.service";
import Product from "../Product/Product";


const Products = ({category}) => {
  const products = ProductsService.getProducts(); 
  const catProducts = products.filter(product => product.category === category)
          .filter(product => product.featured === true)
          .filter((product, index) => index < 4);

  return (
      <div className="products">
        {catProducts.map(product => (
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

export default Products;