import React from "react";

export default function TableProducts({ products, HandleRemove }) {
  return (
    <div className="w-1/2">
      {products.map((product) => (
        <div class="border border-gray-400 mb-2 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="flex items-center justify-between">
            <div className="flex items-center">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src={`../img/${product.pictureUrl}`}
                alt="avatar"
              />
              <div class="text-sm w-64">
                <p class="block text-gray-700 text-sm font-bold  mb-1">
                  {product.name}
                </p>
                <p class="text-gray-700 font-bold leading-none">
                  {product.price}
                </p>
               
              </div>
            </div>
            <div>
            <p class="text-gray-600 leading-none text-xs">{product.ingredients}</p>
            </div>
            <div className="flex flex-row">
              <span className="flex rounded-full bg-green-600 border text-white  px-2 py-1 text-xs font-bold mr-3">
                {product.cant}
              </span>
              <button
                onClick={() => HandleRemove(product)}
                className="flex  p-2 text-x font-bold "
              >
                <i className="fa fa-times text-red-800"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
