import { Link } from "react-router-dom";
import styles from "./Order.module.css";

function Order() {
  return (
    <div className={styles.orderNew}>
      <div>
        <img src="logo.png" alt="" />
      </div>
      <div className={styles.container}>
        <div>
          <Link>Back to menu.</Link>
          <p>One more step...</p>
          <div>
            <div>
              <p>First name:</p>
              <input type="text" placeholder="first name" />
            </div>
            <div>
              <p>Phone Number:</p>
              <input type="text" placeholder="phone number" />
            </div>
            <div>
              <p>Address:</p>
              <input type="text" placeholder="address" />
            </div>
          </div>
          <button>Order!</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
