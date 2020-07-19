import React, { useState, useContext } from "react";
import ProductCard from "./productCard";

const ProductCardsContainer = ({products}) => {

  return (
     <div className=" mx-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-1">
       {products.map((product) => (
              <ProductCard product={product}  key={product.id} />
            ))}
      </div>
      
  );
};

export default ProductCardsContainer;