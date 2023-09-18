import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { useCart } from "../../hooks/contextProvider";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalOfAllPizas } from "./cartSlice";
import SpecificPizzaCart from "../../ui/SpecificPizzaCart";
import { formatTotal } from "../../utils/helpers";

function Cart() {
  const dispatch = useDispatch();
  const { isOpen, setIsOpen } = useCart();
  const cart = useSelector(getCart());
  const total = useSelector(getTotalOfAllPizas());
  return (
    <section className={`${styles.CART} ${isOpen ? styles.opened : ""}`}>
      <Link to="/menu" onClick={() => setIsOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="4rem"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </Link>
      <p>Your order,</p>
      <div className={styles.orderContainer}>
        {cart.map((obj) => (
          <SpecificPizzaCart key={obj.id} obj={obj} />
        ))}
      </div>
      <section>
        <p>total</p>
        <p>{formatTotal(total)}</p>
      </section>
      <div className={styles.buttonContainer}>
        <Link to="/order">Place order!</Link>
        <p onClick={() => dispatch(clearCart())}>Clear cart</p>
      </div>
    </section>
  );
}

export default Cart;
