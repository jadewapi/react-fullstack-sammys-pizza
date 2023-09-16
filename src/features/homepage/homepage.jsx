import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import Logo from "../../ui/Logo";
import img from "../../assets/homepage.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "../order/userSlice";

function Homepage() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles.homepage}>
      <div>
        <Logo />
        <div>
          <input type="text" placeholder="search order #" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="3rem"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      </div>
      <article>
        <p>HI!, Welcome to my place!</p>
        <p>My crew and I makes the best pizza. Try it out ASAP.</p>
        <p>please put your name...</p>
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && (
          <Link to="menu" onClick={() => dispatch(updateName(name))}>
            Start ordering!
          </Link>
        )}
        <img src={img} alt="homepage image" />
      </article>
    </div>
  );
}

export default Homepage;
