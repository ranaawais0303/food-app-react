import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const cartItems = <ul>{}</ul>;
const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amoun</span>
        <span>45.34</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.but}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
