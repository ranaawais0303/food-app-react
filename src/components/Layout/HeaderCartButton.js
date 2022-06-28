import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  //useState for button bump functionalities
  const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);

  //Context provider
  const cartCtx = useContext(CartContext);
  //object destructuring
  const { items } = cartCtx;
  //total number of items in cart
  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //add classes to button
  const btnClasses = ` ${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  //useEffect
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  ////////////
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}> {numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
