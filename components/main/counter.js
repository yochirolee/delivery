import React, { useState, useContext } from "react";

export default function Counter({HandleAddProductToCart,HandleDecrement,HandleIncrement,product,value}) {
 

  return (
    <div className="flex w-40 mx-auto justify-around border-t pt-2">
      <button
        className="rounded w-6 h-6 bg-green-500  text-white"
        onClick={(e)=>HandleDecrement()}
      >
        -
      </button>
      <div className="text-gray-700 w-6 ml-2 mx-auto font-bold">
        <p>{value}</p>
      </div>
      <button
        className="rounded w-6 h-6 bg-green-500  text-white "
        onClick={(e)=>HandleIncrement()}
      >
        +
      </button>
      <button className="ml-4   bg-orange-600 w-20 rounded text-white " onClick={e=>HandleAddProductToCart(product)}>
        <i className='fa fa-cart-plus'></i>
      </button>
    </div>
  );
}
