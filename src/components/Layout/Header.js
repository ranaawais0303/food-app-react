import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="rana" />
      </div>
    </Fragment>
  );
}

export default Header;
