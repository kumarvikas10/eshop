import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Navbar, AddProduct, Products, Cart} from "./index";
import { HashRouter as Router } from "react-router-dom";
import { handleProductFetch } from "../action";
import { connect } from "react-redux";
import ProductInfo from "./ProductInfo";
// import ProductCard from "./ProductCard";
// import Loader from "./Loader";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.dispatch(handleProductFetch());
    console.log("STATE", this.props);
  }

  render() {
    const { products, cart } = this.props;
    console.log("Render");
    console.log(products, cart);
    return (
      <Router>
        <div className="App">
          <Navbar cart={cart}/>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              path="/products"
              element={
                <Products products={products}
                dispatch={this.props.dispatch}/>
              }
            ></Route>
            <Route path="/addproduct" element={<AddProduct  dispatch={this.props.dispatch}/>}></Route>
            <Route path="/cart" element={<Cart  cart={cart} dispatch={this.props.dispatch}/>}></Route>
            <Route path="/products/:productId" element={<ProductInfo products={products.products}
                dispatch={this.props.dispatch}/>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  };
}

const connectAppComponent = connect(mapStateToProps)(App);
export default connectAppComponent;
