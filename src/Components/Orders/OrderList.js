import React from "react";

import Card from "../UI/Card";
import classes from "./OrderList.module.css";

const OrderList = (props) => {
  return (
    <Card className={classes.orders}>
      <ul>
        <h3>Table 1</h3>
        {props.orders
          .filter((order) => order.table === "table1")
          .map((filteredOrder) => (
            <li key={filteredOrder.id}>
              {filteredOrder.dish} ({filteredOrder.price}) {filteredOrder.table}
            </li>
          ))}
      </ul>
      <ul>
        <h3>Table 2</h3>
        {props.orders
          .filter((order) => order.table === "table2")
          .map((filteredOrder) => (
            <li key={filteredOrder.id}>
              {filteredOrder.dish} ({filteredOrder.price}) {filteredOrder.table}
            </li>
          ))}
      </ul>
      <ul>
        <h3>Table 3</h3>
        {props.orders
          .filter((order) => order.table === "table3")
          .map((filteredOrder) => (
            <li key={filteredOrder.id}>
              {filteredOrder.dish} ({filteredOrder.price}) {filteredOrder.table}
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default OrderList;
