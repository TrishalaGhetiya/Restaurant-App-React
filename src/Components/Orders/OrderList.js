import React from "react";

import Card from "../UI/Card";
import classes from "./OrderList.module.css";

const OrderList = (props) => {
const deleteHandler = () => {
    props.onDeleteOrder(props.orders[0].id);
}

  return (
    <Card className={classes.orders}>
      <ul>
        <h3>Table 1</h3>
        {props.orders
          .filter((order) => order.table === "table1")
          .map((filteredOrder) => (
            <li key={filteredOrder.id}>
              {filteredOrder.dish} ({filteredOrder.price})
              <button onClick={deleteHandler}>Delete</button>
            </li>
          ))}
      </ul>
      <ul>
        <h3>Table 2</h3>
        {props.orders
          .filter((order) => order.table === "table2")
          .map((filteredOrder) => (
            <li key={filteredOrder.id}>
              {filteredOrder.dish} ({filteredOrder.price})
              <button onClick={deleteHandler}>Delete</button>
            </li>
          ))}
      </ul>
      <ul>
        <h3>Table 3</h3>
        {props.orders
          .filter((order) => order.table === "table3")
          .map((filteredOrder) => (
            <li key={filteredOrder.id}>
              {filteredOrder.dish} ({filteredOrder.price})
              <button onClick={deleteHandler}>Delete</button>
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default OrderList;
