import { Link, useNavigate } from "react-router-dom";
import styles from "./Order.module.css";
import img from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { getName } from "./userSlice";

function Order() {
  const navigate = useNavigate();
  const name = useSelector(getName());
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
          <div>
            <div>
              <p>First name:</p>
              <input type="text" placeholder="first name" defaultValue={name} />
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
          <Link to="/order/:id">Order</Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
