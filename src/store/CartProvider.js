import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  //   const [showCart, setShowCart] = useState(false);

  //   const showCartHandler = () => {
  //     setShowCart(true);
  //   };
  //   const hideCartHandler = () => {
  //     setShowCart(false);
  //   };
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    // onClose: hideCartHandler,
    // onShow: showCartHandler,
    // // showCart: showCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
