import styles from "./menu.module.css";

function Menu() {
  return (
    <section className={styles.menu}>
      <header>
        <div className={styles.greetings}>
          <p>Good evening, Jade</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="logo.png" alt="" />
        </div>
        <div className={styles.cartContainer}>
          <div>
            <p>your cart</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
            </svg>
          </div>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="search order id..." />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>
      </header>
      <div>
        <p>Our Delicious Menu,</p>
      </div>
      <section className={styles.grid}>
        <article>
          <div>
            <img
              src="https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg"
              alt="pizza images"
            />
          </div>
          <div>
            <p>Namesdfsdfsdfdsfdsf</p>
            <p>Ingridiendsufhs kdjhfjsdhjfdshfl sdfhsdjhfljshdfs</p>
            <div>
              <p>$9.98</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Name</p>
            <p>Ingridients</p>
            <div>
              <p>$9.99</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Name</p>
            <p>Ingridients</p>
            <div>
              <p>$9.99</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Name</p>
            <p>Ingridients</p>
            <div>
              <p>$9.99</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Name</p>
            <p>Ingridients</p>
            <div>
              <p>$9.99</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Name</p>
            <p>Ingridients</p>
            <div>
              <p>$9.99</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Name</p>
            <p>Ingridients</p>
            <div>
              <p>$9.99</p>
              <p>Add to Cart</p>
            </div>
          </div>
        </article>
      </section>
      <section className={styles.CART}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="4rem"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
        <p>Your order,</p>
        <div className={styles.orderContainer}>
          <div>
            <p>pizdksfjsdkjlflsdkjfklsdjfjdsfhljsdhfljksdhfjkza name</p>
            <div>
              <p>$9.99</p>
              <button>+</button>
              <p>2</p>
              <button>+</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3rem"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </div>
          </div>
          <div>
            <p>pizdksfjsdkjlflsdkjfklsdjfjdsfhljsdhfljksdhfjkza name</p>
            <div>
              <p>$9.99</p>
              <button>+</button>
              <p>2</p>
              <button>+</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3rem"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </div>
          </div>
        </div>
        <section>
          <p>total</p>
          <p>$9.99</p>
        </section>
        <div className={styles.buttonContainer}>
          <button>Place order!</button>
        </div>
      </section>
    </section>
  );
}

export default Menu;
