import styles from "./OrderId.module.css";
import img from "../../assets/logo.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrder } from "../../services/apiRestaurant";
import Loading from "../../ui/Loading/Loading";
import { calcMinutesLeft } from "../../utils/helpers";

function OrderId() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = orderData;
  useEffect(
    function () {
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
    },
    [id]
  );
  const deliveredIn = calcMinutesLeft(estimatedDelivery);
  console.log(deliveredIn);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
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
            <p>Preparing Order</p>
          </div>
          <div>
            {deliveredIn >= 0 ? (
              <p>
                Only {deliveredIn} {deliveredIn > 1 ? "minutes" : "minute"} left
              </p>
            ) : (
              <p>Pizza arrived</p>
            )}
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

export default OrderId;
