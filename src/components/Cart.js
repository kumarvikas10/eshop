import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import React from "react";
import Loader from "./Loader";

function Cart(props) {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const { cart } = props;

  useEffect(() => {
    console.log(cart)
    const countTotal =()=> {
      var total = 0;
      cart.cart.map((product) => (total += product.price));
      setTotal(total);
    };
    setLoading(false);
    countTotal()
  }, [cart]);

  console.log(cart.cart.length);
  return (
    <div className="background">
      <div className="products">
        {loading ? (
          <Loader />
        ) : (
          <div className="productList">
            {cart.cart.map((product) => (
              <CartCard product={product} dispatch={props.dispatch} />
            ))}
          </div>
        )}
        {cart.cart.length === 0 ? null : (
          <div className="price">
           <button className="pricebtn"> <span>Total:{total}/-</span></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
