import React, { useState } from "react";
import "./App.css";
import AddOrder from "./Components/Orders/AddOrder";
import OrderList from "./Components/Orders/OrderList";

function App() {
  const [orderList, setOrderList] = useState([]);

  const deleteOrderHandler = (orderId) => {
    setOrderList((prevOrders) => {
      const updatedOrders = prevOrders.filter((order) => order.id !== orderId);
      return updatedOrders;
    });
  };

  const addOrderHandler = (oDish, oPrice, oTable) => {
    setOrderList((prevOrderList) => {
      const updatedOrders = [...prevOrderList];
      updatedOrders.unshift({
        dish: oDish,
        price: oPrice,
        table: oTable,
        id: Math.random().toString(),
      });
      return updatedOrders;
    });
  };
  return (
    <>
      <AddOrder onAddOrder={addOrderHandler} />
      <OrderList orders={orderList} onDeleteOrder={deleteOrderHandler} />
    </>
  );
}

export default App;
