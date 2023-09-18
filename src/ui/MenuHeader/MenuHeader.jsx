import { Link } from "react-router-dom";
import styles from "./MenuHeader.module.css";
import Logo from "../Logo";
import { useCart } from "../../hooks/contextProvider";
import { useSelector } from "react-redux";
import { getTotalPizzas } from "../../features/cart/cartSlice";

function MenuHeader() {
  const { setIsOpen, isOpen } = useCart();
  const total = useSelector(getTotalPizzas());
  return (
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
        <div
          to="/menu/cart"
          onClick={() => setIsOpen(true)}
          className={`${isOpen ? styles.cartOpen : ""}`}
        >
          <p>Your cart</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
          </svg>
          <span>{total}</span>
        </div>
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
  );
}

export default MenuHeader;
