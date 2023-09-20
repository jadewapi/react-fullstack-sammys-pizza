import styles from "./Menu.module.css";
import Loading from "../../ui/Loading/Loading";
import Pizza from "../../ui/Pizza";
import Cart from "../cart/Cart";
import MenuHeader from "../../ui/MenuHeader/MenuHeader";
import { useCart } from "../../hooks/contextProvider";
import { useEffect, useState } from "react";
import { getRestaurantData } from "../../services/apiRestaurant";

function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getRestaurantData();
        setMenu(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  const [isLoading, setIsLoading] = useState(false);

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
