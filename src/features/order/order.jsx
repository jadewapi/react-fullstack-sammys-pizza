import { Link, useNavigate } from "react-router-dom";
import styles from "./Order.module.css";
import img from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { getName } from "./userSlice";
import { getCart } from "../cart/cartSlice";
import { useEffect, useRef } from "react";
import { createOrder, getOrder } from "../../services/apiRestaurant";

function Order() {
  const focus = useRef();
  const navigate = useNavigate();
  const name = useSelector(getName());
  const cart = useSelector(getCart());
  async function handleSubmit(e) {
    e.preventDefault();
    const object = {
      address: "sdfsdfdsf",
      cart: cart,
      customer: "sdfdsfsdf",
      phone: "3232323",
    };
    const order = await createOrder(object);
    navigate(`/order/${order.id}`);
  }
  useEffect(function () {
    focus.current.focus();
  }, []);
  return (
    <div className={styles.orderNew}>
      <div>
        <Link to="/">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className={styles.container}>
        <div>
          <p onClick={() => navigate(-1)}>Back to menu.</p>
          <p>One more step...</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <p>First name:</p>
              <input
                ref={focus}
                type="text"
                placeholder="first name"
                defaultValue={name}
                required
              />
            </div>
            <div>
              <p>Phone Number:</p>
              <input type="number" placeholder="phone number" required />
            </div>
            <div>
              <p>Address:</p>
              <input type="text" placeholder="address" required />
            </div>
            <button>Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;
