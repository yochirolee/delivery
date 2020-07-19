import React, { useEffect, useState } from "react";

export default function OrdersStatus({ news }) {


  


  return (
    <div className="w-1/2 flex flex-row justify-evenly">
      <div>
        <p>News Orders {news}</p>
      </div>
      <div>
        <p>Orders In Process </p>
      </div>
      <div>
        <p>Orders Ready </p>
      </div>
      <div>
        <p>Orders Delivered </p>
      </div>
    </div>
  );
}
