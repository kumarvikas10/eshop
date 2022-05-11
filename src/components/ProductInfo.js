import styles from "../styles/productinfo.module.css";
import { useParams } from "react-router-dom";
import ShortUniqueId from "short-unique-id";
import { handlecartaddition } from "../action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = (props) => {
  const { products } = props;
  const { productId } = useParams();
  const uid = new ShortUniqueId({ length: 8 });
  const result = products.find((product) => product.id === productId);
  console.log(result);

  function handleCart() {
    let newidproduct = {
      name: result.name,
      description: result.description,
      price: result.price,
      img: result.img,
      rating: result.rating,
      id: uid(),
    };
    props.dispatch(handlecartaddition(newidproduct));
    toast("Product Added to cart ")
  }

  return (
    <div className={styles.productinfo}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src={result.img} alt="headerimage" />
        </div>
        <div className={styles.right}>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
          <div className={styles.section}>
            <div className={styles.price}>Price: {result.price}/-</div>
            <div className={styles.rating}>
              {result.rating === 5
                ? [...Array(5)].map((star) => {
                    return <span className={styles.star}>&#9733;</span>;
                  })
                : [...Array(result.rating)].map((star) => {
                    return <span className={styles.star}>&#9733;</span>;
                  })}
              {result.rating < 5
                ? [...Array(5 - result.rating)].map((star) => {
                    return <span className={styles.blankstar}>&#9733;</span>;
                  })
                : null}
            </div>
          </div>
          <div className={styles.addtocart}>
            <button className={styles.addtocartbtn} onClick={handleCart}>
              <i class="fa-solid fa-cart-shopping">
                <span>ADD TO CART</span>
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
