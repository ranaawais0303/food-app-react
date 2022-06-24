import React from "react";
import classes from "./Cart.module.css";
const cartItems = <ul>{}</ul>;
const Cart = (props) => {
  return (
    <div className={classes["cart-items"]}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amoun</span>
        <span>45.34</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
