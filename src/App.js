import React, { useState } from "react";
import "./App.css";
import AddOrder from "./Components/Orders/AddOrder";
import OrderList from "./Components/Orders/OrderList";

function App() {
  const [orderList, setOrderList] = useState([]);

  const addOrderHandler = (oDish, oPrice, oTable) => {
    setOrderList((prevOrderList) => {
      return [
        ...prevOrderList,
        {
          dish: oDish,
          price: oPrice,
          table: oTable,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <>
      <AddOrder onAddOrder={addOrderHandler} />
      <OrderList orders={orderList} />
    </>
  );
}

export default App;
