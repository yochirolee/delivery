import React, { useContext, useState, useEffect } from "react";
import LayoutDashboard from "../../layout/layoutDashboard";
import OrderList from "../../components/dashboard/orderList";
import OrderDetailsView from "../../components/dashboard/orderDetailView";
import OrdersStatus from "../../components/dashboard/ordersStatus";
import firebase from "firebase/app";
import "firebase/firestore";

export default function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsubcribe = firebase
      .firestore()
      .collection("orders")
      .onSnapshot(async (snapshot) => {
        const orders = await snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(orders);
        setLoading(false);
      });

    return () => unsubcribe();
  }, []);

  // async function fetchDataSnap() {
  //   setLoading(true);

  //   setOrders(orders_data);
  //   setLoading(false);
  // }

  const HandleStatus = (order) => {
    let auxOrder = order;
    switch (auxOrder.status) {
      case "New":
        auxOrder.status = "Processing";
        break;
      case "Processing":
        auxOrder.status = "Ready";
        break;
      case "Ready":
        auxOrder.status = "Delivery";
        break;

      default:
        break;
    }

    firebase.firestore().collection("orders").doc(order.id).set(auxOrder);
  };

  const HandleOrderDetails = (order) => {
    setOrderDetails(order);
  };
  return (
    <LayoutDashboard>
      <div className="flex flex-row justify-between">
        <h3 class="text-gray-700 text-3xl w-1/2 font-medium mx-4 mt-2 mb-2 border-b-2">
          Orders
        </h3>
        <OrdersStatus />
      </div>
      <div >
        {loading ? (
          <div>...loading</div>
        ) : (
          <div className="flex flex-row">
            <div class=" w-1/2 mx-10   lg:flex flex-col">
              {orders.map((order) => (
                <OrderList
                  order={order}
                  HandleOrderDetails={HandleOrderDetails}
                />
              ))}
            </div>
            <div className="w-1/2">
              <OrderDetailsView
                orderDetails={orderDetails}
                HandleStatus={HandleStatus}
              />
            </div>
          </div>
        )}
      </div>
    </LayoutDashboard>
  );
}
