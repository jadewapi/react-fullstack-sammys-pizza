import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import Quantity from "../../ui/Quantity";
import { useCart } from "../../hooks/contextProvider";

function Cart() {
  const { isOpen, setIsOpen } = useCart();

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
        <div>
          <p>pizdksfjsdkjlflsdkjfklsdjfjdsfhljsdhfljksdhfjkza name</p>
          <div>
            <p>$9.99</p>
            <Quantity />
          </div>
        </div>
        <div>
          <p>pizdksfjsdkjlflsdkjfklsdjfjdsfhljsdhfljksdhfjkza name</p>
          <div>
            <p>$9.99</p>
            <Quantity />
          </div>
        </div>
      </div>
      <section>
        <p>total</p>
        <p>$9.99</p>
      </section>
      <div className={styles.buttonContainer}>
        <Link to="/order">Place order!</Link>
      </div>
    </section>
  );
}

export default Cart;
