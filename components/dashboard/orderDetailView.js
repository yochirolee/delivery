import React from "react";

export default function OrderDetailsView({ orderDetails, HandleStatus }) {
  return (
    <div className="flex flex-col">

      <span className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
       <i className='fa fa-phone-square-alt mr-1 opacity-25'></i> {orderDetails.phone}
      </span>

      <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      <i className='fa fa-user mr-2 opacity-25'></i> {orderDetails.name}
      </span>

      <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      <i className='fa fa-address-card mr-2 opacity-25'></i>
        {orderDetails.address}
      </span>

      {orderDetails.products ? (
        orderDetails.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-row justify-around tracking-wide text-gray-700 text-xs font-bold my-4 mr-4 border-t"
          >
            <p className="">{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}

   
        {orderDetails.status ? (
          <div className='flex flex-col  mt-4  border-t'>
            <p className="mx-auto my-1">
              Press the Button to Change Order State
            </p>
            <button
              onClick={() => HandleStatus(orderDetails)}
              className="border-none w-64 mx-auto bg-green-600 p-2  rounded text-white"
            >
              {orderDetails.status}
            </button>
          </div>
        ) : (
          <div></div>
        )}
     
    </div>
  );
}
