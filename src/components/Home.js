import image from "../eshop.png";

import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src={image} alt="headerimage" />
        </div>
        <div className={styles.right}>
          <h2>Online Shopping</h2>
          <p>
            If you would like to experience the best of online shopping for men,
            women and kids in India, you are at the right place. e-Shop is the
            ultimate destination for fashion and lifestyle, being host to a wide
            array of merchandise including clothing, footwear, accessories,
            jewellery, personal care products and more. It is time to redefine
            your style statement with our treasure-trove of trendy items. Our
            online store brings you the latest in designer products straight out
            of fashion houses. You can shop online at e-Shop from the comfort of
            your home and get your favourites delivered right to your doorstep.
          </p>
          <div className={styles.buynow}>
            <button className={styles.buynowbtn}>
                <i class="fa-solid fa-bag-shopping"></i>
                <li>
                  <Link to="/products">BuyNow</Link>
                </li>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
