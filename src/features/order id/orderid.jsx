import styles from "./OrderId.module.css";
import img from "../../assets/logo.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrder } from "../../services/apiRestaurant";
import Loading from "../../ui/Loading/Loading";
import { calcMinutesLeft, formatDate, formatTotal } from "../../utils/helpers";
import Error from "../../ui/Error/Error";

function OrderId() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    customer,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = orderData;
  useEffect(function () {
    async function getOrderData() {
      try {
        setIsLoading(true);
        const data = await getOrder(id);
        setOrderData(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getOrderData();
  }, []);

  const deliveredIn = calcMinutesLeft(estimatedDelivery);
  const style = deliveredIn < 0 ? { backgroundColor: "green" } : {};
  if (isLoading) {
    return <Loading />;
  }
  if (!orderData) {
    return <Error />;
  }
  return (
    <div className={styles.container} style={style}>
      <div>
        <Link to="/">
          <img src={img} alt="logo" />
        </Link>
      </div>
      <div className={styles.content}>
        <Link to="/">Back to homepage</Link>
        <div className={styles.contentWrapper}>
          <div>
            <p>Order {id}</p>
            <p style={style}>
              {deliveredIn > 0 ? "Preparing Order" : "Order Delivered"}
            </p>
          </div>
          <div>
            {deliveredIn >= 0 ? (
              <p>
                Only {deliveredIn} {deliveredIn > 1 ? "minutes " : "minute "}
                left, {customer}
              </p>
            ) : (
              <p>Pizza arrived</p>
            )}
            <p>Estimated delivery: {formatDate(estimatedDelivery)}</p>
          </div>
          <div className={styles.pizzas} style={style}>
            {cart &&
              cart.map((obj) => (
                <div key={obj.pizzaId}>
                  <div>
                    <p>{obj.quantity}x</p>
                    <p>{obj.name}</p>
                  </div>
                  <p>{formatTotal(obj.totalPrice)}</p>
                </div>
              ))}
          </div>
          <p>
            total:{" "}
            {formatTotal(cart.reduce((acc, curr) => acc + curr.totalPrice, 0))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderId;
