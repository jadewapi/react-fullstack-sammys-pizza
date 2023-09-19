import { Link, useNavigate } from "react-router-dom";
import styles from "./Order.module.css";
import img from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addAddress,
  addName,
  addPhone,
  getAddress,
  getName,
  getPhone,
} from "./userSlice";
import { getCart } from "../cart/cartSlice";
import { useEffect, useRef } from "react";
import { createOrder } from "../../services/apiRestaurant";

// address, cart: [{name, pizzaId, quantity, totalPrice, unitPrice}], customer: 'dfsdfdsf', phone: 'dfsdfsdfdf', position: 'dsfsdf', priority: false;

function Order() {
  const dispatch = useDispatch();
  const focus = useRef();
  const navigate = useNavigate();
  const name = useSelector(getName());
  const cart = useSelector(getCart());
  const phone = useSelector(getPhone());
  const address = useSelector(getAddress());
  useEffect(function () {
    focus.current.focus();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      customer: "Your Customer Name", // Replace with actual value
      phone: "123456789", // Replace with actual value
      address: "123 Main St", // Replace with actual value
      cart: cart, // Ensure this is not empty at the time of the request
      priority: false,
    };
    console.log(cart);
    await createOrder(newOrder);
  }
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
                required
                value={name}
                onChange={(e) => dispatch(addName(e.target.value))}
              />
            </div>
            <div>
              <p>Phone Number:</p>
              <input
                type="number"
                placeholder="phone number"
                required
                value={phone}
                onChange={(e) => dispatch(addPhone(e.target.value))}
              />
            </div>
            <div>
              <p>Address:</p>
              <input
                type="text"
                placeholder="address"
                required
                value={address}
                onChange={(e) => dispatch(addAddress(e.target.value))}
              />
            </div>
            <button>Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;
