import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Menu.module.css";
import Logo from "../../ui/Logo";
import { useEffect, useState } from "react";
import { getRestaurantData } from "../../services/apiRestaurant";
import Loading from "../../ui/Loading/Loading";

function Menu() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getRestaurantData();
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section className={styles.menu}>
      <header>
        <div className={styles.greetings}>
          <p>Good evening, Jade</p>
        </div>
        <div className={styles.imageContainer}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.cartContainer}>
          <NavLink to="/menu/cart">
            <p>Your cart</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
            </svg>
          </NavLink>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="search order id..." />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>
      </header>
      <div>
        <p>Our Delicious Menu,</p>
      </div>
      <section className={styles.grid}>
        <article>
          <div>
            <img
              src="https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg"
              alt="pizza images"
            />
          </div>
          <div>
            <p>Namesdfsdfsdfdsfdsf</p>
            <p>Ingridiendsufhs kdjhfjsdhjfdshfl sdfhsdjhfljshdfs</p>
            <div>
              <p>$9.98</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
      </section>
      <Outlet />
    </section>
  );
}

export default Menu;
