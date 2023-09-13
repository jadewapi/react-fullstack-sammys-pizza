import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <section className={styles.CART}>
      <Link to="/menu">
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
            <button>+</button>
            <p>2</p>
            <button>+</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3rem"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </div>
        </div>
        <div>
          <p>pizdksfjsdkjlflsdkjfklsdjfjdsfhljsdhfljksdhfjkza name</p>
          <div>
            <p>$9.99</p>
            <button>+</button>
            <p>2</p>
            <button>+</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3rem"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
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
