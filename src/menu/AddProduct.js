import { useFormInput } from "../components/hooks";
import styles from "../styles/addproduct.module.css";
import { useState } from "react";
import { addProduct } from "../action";
import ShortUniqueId from "short-unique-id";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = (props) => {
  const name = useFormInput("");
  const [price, setPrice] = useState(0);
  const description = useFormInput("");
  const img = useFormInput("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const uid = new ShortUniqueId({ length: 8 });

  function handlePriceChange(e) {
    setPrice(parseInt(e.target.value));
  }
  
  //hnadle the new product addition btn
  function handleSubmit(e) {
    e.preventDefault();
    let product = {
      name: name.value,
      description: description.value,
      price: price,
      img: img.value,
      rating: rating,
      id: uid(),
    };
    console.log(product);
    props.dispatch(addProduct(product));
    toast("New Product Added in Product List")
  }
  return (
    <div className={styles.addproduct}>
      <div className={styles.createproduct}>
        <h1>Create Product</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formfield}>
            <label>Name</label>
            {/* <input value={name} onChange={(e) => setname(e.target.value)} /> */}
            <input {...name} required/>
          </div>

          <div className={styles.formfield}>
            <label>Price</label>
            <input type="number" value={price} onChange={handlePriceChange}  required/>
            {/* <input type="number" {...price} /> */}
          </div>

          <div className={styles.formfield}>
            <label>Description</label>
            {/* <textarea value={description} onChange={(e) => setdescription(e.target.value)} ></textarea> */}
            <textarea {...description} required/>
          </div>

          <div className={styles.formfield}>
            <label>Image</label>
            {/* <textarea value={description} onChange={(e) => setdescription(e.target.value)} ></textarea> */}
            <input {...img} required/>
          </div>

          {/* <div className={styles.formfield}>
          <label>Rating</label>
          <input type="number"  min="1" max="5" value={rating} onChange={handleRatingChange}  />
        </div> */}
          <div className={styles.starrating}>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={
                    index <= (hover || rating)
                      ? `${styles.on}`
                      : `${styles.off}`
                  }
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span className={styles.star}>&#9733;</span>
                </button>
              );
            })}
          </div>

          <button className={styles.createproductbtn}>Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
