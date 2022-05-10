import React from "react";
// import { connect } from "react-redux";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
// import {storeContext} from '../index'

class Navbar extends React.Component {
  render() {
    const {cart}= this.props;
    console.log(cart.cart.length)
    return (
      <div className={styles.main}>
        <div className={styles.leftDiv}>
          <div className={styles.logo}>
            <i class="fa-brands fa-shopify">
              <span>e-Shop</span>
            </i>
            <div className={styles.nav}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/addproduct">Add Product</Link>
              </li>
            </div>
          </div>
        </div>
        <div className={styles.cart}>
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping">
              {cart.cart.length===0 ? (null) : (<i class="fa-solid fa-message"><span>{cart.cart.length}</span></i>)}
            </i>
          </Link>
        </div>
      </div>
    );
  }
}

// function mapStateToProps({search}){
//     return{
//         search,
//     };
// }

// export default connect(Navbar);
export default Navbar;
