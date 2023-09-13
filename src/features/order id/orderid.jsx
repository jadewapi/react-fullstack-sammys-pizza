import styles from "./OrderId.module.css";

function orderid() {
  return (
    <div className={styles.container}>
      <div>
        <img src="logo.png" alt="logo" />
      </div>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <div>
            <p>Order SJHUIF</p>
            <p>Preparing Order</p>
          </div>
          <div>
            <p>Only 29 minutes left</p>
            <p>Estimated delivery: 5:06PM</p>
          </div>
          <div className={styles.pizzas}>
            <div>
              <div>
                <p>10x</p>
                <p>Pizza Name</p>
              </div>
              <p>$19.99</p>
            </div>
            <div>
              <div>
                <p>10x</p>
                <p>Pizza Name</p>
              </div>
              <p>$19.99</p>
            </div>
          </div>
          <p>total: $9.99</p>
        </div>
      </div>
    </div>
  );
}

export default orderid;
