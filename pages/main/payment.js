import React, { useState, useContext } from "react";
import { ProductsInCartContext } from "../../context/productInCartContext";
import Layout from "../../layout/layout";
import PaymentForm from "../../components/main/paymentForm";
import PaymentCart from "../../components/main/paymentCart";
import { FirebaseContext } from "../../context/firebaseContext";
import MainOrderStatus from "./mainOrderStatus";

export default function Payment(props) {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);
  const firebase = useContext(FirebaseContext);
  const [orderDone, setOrderDone] = useState(false);
  const [order, setOrder] = useState();

  const getTotal = () => {
    let Total = 0;
    productsInCart.map((product) => {
      Total += parseFloat(product.price);
    });

    return Total.toFixed(2);
  };

  const HandleSubmit = async (data) => {
    try {
      data.products = productsInCart;
      data.date = Date.now();
      data.status = "New";
      data.totalPrice=getTotal();
      setOrder(await firebase.saveData({ collection: "orders", data: data }));
      document.getElementById("form-payment").reset();
      setOrderDone(true);
    } catch {
      throw error;
    }
  };

  return (
    <Layout>
      <div className="container mx-24 flex flex-row">
        <div className="w-1/2"></div>
        <div className="bg-white shadow-md w-1/2 rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          {!orderDone ? (
            <div>
              <PaymentCart productsInCart={productsInCart} totalPrice={getTotal()}/>
              <PaymentForm HandleSubmit={HandleSubmit} />{" "}
            </div>
          ) : (
            <MainOrderStatus orderId={order.id}/>
          )}
        </div>
      </div>
    </Layout>
  );
}
