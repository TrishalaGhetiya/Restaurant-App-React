import React, { useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddOrder.module.css";

const AddOrder = (props) => {
  const dishInputRef = useRef();
  const priceInputRef = useRef();
  const tableNumberInputRef = useRef();

  const addOrderHandler = (event) => {
    event.preventDefault();
    const enteredDish = dishInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredTable = tableNumberInputRef.current.value;
    
    props.onAddOrder(enteredDish, enteredPrice, enteredTable);
    dishInputRef.current.value = "";
    priceInputRef.current.value = "";
    tableNumberInputRef.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addOrderHandler}>
        <label htmlFor="dish">Dish</label>
        <input id="dish" type="text" ref={dishInputRef} />

        <label htmlFor="price">Price</label>
        <input id="price" type="number" ref={priceInputRef} />

        <label htmlFor="tableNumber">Table</label>
        <select id="tableNumber" ref={tableNumberInputRef}>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
        
        <Button type="submit">Place Order</Button>
      </form>
    </Card>
  );
};

export default AddOrder;
