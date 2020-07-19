import React from "react";
import Link from "next/link";

export default function ShopCart({ productsInCart }) {
  const HandleRemoveProduct = (id) => {
    let auxProduct = [...productsInCart];
    auxProduct.splice(id, 1);
    setProductsInCart(auxProduct);
    console.log("id to remove", id, auxProduct);
  };

  const getTotal = () => {
    let Total = 0;
    productsInCart.map((product) => {
      Total += parseFloat(product.price);
    });

    return Total.toFixed(2);
  };

  return (
    <div className="mx-1  w-full">
      {productsInCart.map((product) => (
        <div className="flex flex-row ">
          <p className=" w-4/6 ml-1 py-2 text-sm text-gray-700  ">
            {product.name}
          </p>
          <p className="w-1/6 block ml-1 py-2 text-sm text-gray-700">
            {product.price}
          </p>
          <button className=" pl-1 w-1/6 py-2 text-sm text-gray-700  hover:text-red">
            X
          </button>
        </div>
      ))}
      <div className="flex flex-rows   px-5 mx-auto border-0 border-t ">
        <p className="  bolder w-full ">Total</p>
        <p>{getTotal()}</p>
      </div>
      <Link href="/main/payment">
        <button className=" bg-gray-600 w-48 mx-auto  rounded  shadow-2xl h-10 text-white">
          Ordenar
        </button>
      </Link>
    </div>
  );
}
