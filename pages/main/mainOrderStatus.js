import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

export default function MainOrderStatus({ orderId }) {
  let [orderStatus, setOrderStatus] = useState("");

  const getTotal = () => {
    let Total = 0;
    orderStatus.products.map((product) => {
      Total += parseFloat(product.price);
    });

    return Total.toFixed(2);
  };

  useEffect(() => {
    const unsubcribe = firebase
      .firestore()
      .collection("orders")
      .doc(orderId)
      .onSnapshot(async function (doc) {
        const order = await doc.data();
        setOrderStatus(order);
      });

    return () => unsubcribe();
  }, []);

  return (
    <div>
      <h3>Su Orden ha sido Recibida</h3>
      <p>Para conocer el estado de su orden, no cierre esta pagina</p>
      <div className="flex flex-col mt-2 border-t">
        <div className="flex flex-row mt-2">
          <p className="text-xs">Nombre: </p>
          <span className="block uppercase ml-2 tracking-wide text-gray-700 text-xs flex flex-row font-bold mb-2">
            <p>{orderStatus.name}</p>
          </span>
        </div>
        <div className="flex flex-row mt-2">
          <p className="text-xs">Phone: </p>
          <span className="block uppercase ml-2 tracking-wide text-gray-700 text-xs flex flex-row font-bold mb-2">
            <p>{orderStatus.phone}</p>
          </span>
        </div>
        <div className="flex flex-row mt-2">
          <p className="text-xs">Direccion de Entrega: </p>
          <span className="block uppercase ml-2 tracking-wide text-gray-700 text-xs flex flex-row font-bold mb-2">
            <p>{orderStatus.address}</p>
          </span>
        </div>
        <div className="flex flex-row mt-2">
          <p className="text-xs">Total a Pagar: </p>
          <span className="block uppercase ml-2 tracking-wide text-gray-700 text-xs flex flex-row font-bold mb-2">
           {orderStatus.totalPrice}
          </span>
        </div>
        <span className="border-none w-64 mx-auto bg-green-600 p-2  rounded text-white">
          <p>{orderStatus.status}</p>
        </span>

        {orderStatus.products ? (
          orderStatus.products.map((product, index) => (
            <div
              key={index}
              className="flex flex-row justify-around tracking-wide text-gray-700 text-xs font-bold my-4 mr-4 border-t"
            >
              <p className="">{product.name}</p>
              <p>{product.price}</p>
             
            </div>
          )
          )
          
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
