import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import Logo from "../../ui/Logo";
import { useEffect, useState } from "react";
import { getRestaurantData } from "../../services/apiRestaurant";
import Loading from "../../ui/Loading/Loading";
import Pizza from "../../ui/Pizza";
import Cart from "../cart/Cart";
import Quantity from "../../ui/Quantity";
import MenuHeader from "../../ui/MenuHeader/MenuHeader";
import { useCart } from "../../hooks/contextProvider";

function Menu() {
  const { isLoading, menu } = useCart();

  if (isLoading) return <Loading />;

  return (
    <section className={styles.menu}>
      <MenuHeader />
      <div>
        <p>Our Delicious Menu,</p>
      </div>
      <section className={styles.grid}>
        {menu.map((obj) => (
          <Pizza obj={obj} key={obj.id} />
        ))}
      </section>
      <Cart />
    </section>
  );
}

export default Menu;
