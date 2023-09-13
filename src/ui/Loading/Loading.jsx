import styles from "./Loading.module.css";
import img from "../../assets/homepage.png";

function Loading() {
  return (
    <div className={styles.container}>
      <img src={img}></img>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
