import React from "react";
import styles from '../styles/cart.module.css'
import { handleProductDelete } from "../action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useState } from "react";

const CartCard = (props) => {
    const {product} = props;
    
    //FUNCTION TO DELETE PRODUCT FROM CART
    function deleteProduct (){
      const {product} = props;
      props.dispatch( handleProductDelete(product))
      toast("Product Delete From Cart")
    }

    return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img alt="movie-poster" src={product.img} />
      </div>
      <div className={styles.right}>
        <div className={styles.name}><label>Name: </label>{product.name}</div>
        <div className={styles.description}><label>Description: </label>{product.description}</div>
        <div className={styles.footer}>
          <div className={styles.price}>
            <label>Price: </label>
            {product.price}
          </div>
          <div className={styles.rating}>
            <div>Rating: </div>
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
                    return <span className={styles.blankstar}>&#9733;</span>;
                  })
                : null}
            </div>
          </div>
        </div>
        <div className={styles.edit}>
          <div className={styles.delete} onClick={deleteProduct}>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
