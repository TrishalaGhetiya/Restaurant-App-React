import React from "react";

import Card from "../UI/Card";
import classes from "./OrderList.module.css";

const OrderList = (props) => {
  return (
    <Card className={classes.orders}>
      <ul>
        <h3>Table 1</h3>
        {props.orders.filter((order) => {
          if (order.table === "table1") {
            <li key={order.id}>
              {order.dish} ({order.price}) {order.table}
            </li>;
          }
        })}
      </ul>
      <ul>
        <h3>Table 2</h3>
        {props.orders.map((order) => (
          <li key={order.id}>
            {order.dish} ({order.price}) {order.table}
          </li>
        ))}
      </ul>
      <ul>
        <h3>Table 3</h3>
        {props.orders.map((order) => (
          <li key={order.id}>
            {order.dish} ({order.price}) {order.table}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OrderList;
