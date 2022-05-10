import React, { useState } from "react";
import styles from "../styles/productcard.module.css";
import { useFormInput } from "./hooks";
import { handleProductEdit, handlecartaddition, handleProductRemove} from "../action";
import ShortUniqueId from "short-unique-id";
import { Link } from "react-router-dom";


const ProductCard = (props) => {
    const product = props.product;
    const [edit, setEdit] = useState(false);
    const name = useFormInput(product.name);
    const [price, setPrice] = useState(product.price);
    const description = useFormInput(product.description);
    const [rating, setRating] = useState(product.rating);
    const uid = new ShortUniqueId({ length: 8 });
    // console.log(product)

    function handlePriceChange(e) {
        setPrice(parseInt(e.target.value));
    }
    function handleRatingChange(e) {
        setRating(parseInt(e.target.value));
    }

    function handleCart () {
        const product = props.product;
        let newidproduct = {
          name: product.name,
          description: product.description,
          price: product.price,
          img: product.img,
          rating: product.rating,
          id: uid()
        };
        props.dispatch(handlecartaddition(newidproduct))
    }

    function handleChange () {
        setEdit(true);
    }

    function handleDelete () {
        const {product} = props;
        props.dispatch(handleProductRemove(product));
    }

    function handleSaveChange () {
        const product = props.product;
        let editproduct = {
            name: name.value,
            description: description.value,
            price: price,
            img: product.img,
            rating: rating,
            id: product.id,
          };
        console.log(editproduct)
        props.dispatch(handleProductEdit(editproduct));
        setEdit(false);
    }

    return (
        <div className={styles.productCard}>
        <div className={styles.left}>
          <img alt="movie-poster" src={product.img} />
        </div>
        <div className={styles.right}>
          <div className={styles.name}>
            {edit ? (
              <div className={styles.namebox}>
                <label for="domTextElement">Name: </label>
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  value={name}
                  {...name}
                />
              </div>
            ) : (
              <li><Link to={`/products/${product.id}`}>
              {product.name}
              </Link></li>
            )}
            
          </div>
          <div className={styles.description}>
            {edit ? (
              <div className={styles.descriptiontext}>
                <label for="domTextElement">Description: </label>
                <textarea
                  rows="2"
                  cols="25"
                  placeholder="Description"
                  id="description"
                  value={description}
                  {...description} 
                ></textarea>
              </div>
            ) : (
              `${product.description.substring(0, 100)}`
            )}
          </div>
          <div className={styles.footer}>
            <div className={styles.price}>
              <label>Price: </label>
              {edit ? (
                <input
                  placeholder="Price"
                  id="price"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                />
              ) : (
                `${product.price}`
              )}
            </div>
            <div className={styles.rating}>
              <div>Rating: </div>
              {edit ? (
                <div className={styles.formfield}>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={handleRatingChange}
                  />
                </div>
              ) : (
                <div>
                  {product.rating === 5
                    ? [...Array(5)].map((star) => {
                        return <span className={styles.star}>&#9733;</span>;
                      })
                    : [...Array(product.rating)].map((star) => {
                        return <span className={styles.star}>&#9733;</span>;
                      })}
                  {product.rating < 5
                    ? [...Array(5 - product.rating)].map((star) => {
                        return (
                          <span className={styles.blankstar}>&#9733;</span>
                        );
                      })
                    : null}
                </div>
              )}
            </div>
          </div>
          <div className={styles.btnfooter}>
            <div >
              <button className={styles.addtocartbtn} onClick={handleCart}>ADD TO CART</button>
            </div>
          <div className={styles.edit}>
            <div className={styles.pen} onClick={handleChange}>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className={styles.delete} onClick={handleDelete}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
            {edit ? (
              <div className={styles.save} onClick={handleSaveChange}>
                <i class="fa-solid fa-floppy-disk"></i>
              </div>
            ) : null}
          </div>
          </div>
        </div>
      </div>
    );
}

export default ProductCard;