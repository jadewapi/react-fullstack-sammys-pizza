import { Link, useNavigate } from "react-router-dom";
import styles from "./Order.module.css";
import img from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { addName, clearEverything, getName } from "./userSlice";
import { clearCart, getCart } from "../cart/cartSlice";
import { useEffect, useRef, useState } from "react";
import { createOrder, getOrder } from "../../services/apiRestaurant";

function Order() {
  const dispatch = useDispatch();
  const focus = useRef();
  const navigate = useNavigate();
  const name = useSelector(getName());
  const cart = useSelector(getCart());
  const [changeName, setChangeName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const object = {
      address: address,
      cart: cart,
      customer: !changeName ? name : changeName,
      phone: phone,
    };
    const order = await createOrder(object);
    dispatch(clearCart());
    dispatch(clearEverything());
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
                onChange={(e) => setChangeName(e.target.value)}
              />
            </div>
            <div>
              <p>Phone Number:</p>
              <input
                type="number"
                placeholder="phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <p>Address:</p>
              <input
                type="text"
                placeholder="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
