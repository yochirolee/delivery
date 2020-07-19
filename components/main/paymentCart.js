import React from 'react';


export default function PaymentCart({productsInCart,totalPrice}){

    

   
    return (
        <div className="mx-1  w-full">
        {productsInCart.map((product) => (
          <div className="flex flex-row ">
            <p className=" w-4/6 ml-1 py-2 text-sm text-gray-700  ">
              {product.name}
            </p>
            <p className="w-2/6 block ml-1 py-2 text-sm text-gray-700">
              {product.price}
            </p>
            
          </div>
        ))}
        <div className="flex   px-5 mx-auto border-0 border-t ">
          <p className="  bolder w-full ">Total</p>
          <p><span>$ </span>{totalPrice}</p>
        </div>
      
        
      </div>
    )
}