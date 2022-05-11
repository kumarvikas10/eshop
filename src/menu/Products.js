import ProductCard from "../components/ProductCard";
import { useEffect, useState} from "react";
import React from "react";
import Loader from "../components/Loader";
import { handleSortPrice } from "../action";

function Products (props) {
  const [loading, setLoading]= useState(true);
  const { products } = props;
  useEffect(() => {
    setLoading(false);
  },[])
  
  function sortByPrice(){
    props.dispatch(handleSortPrice(products))
  }
  return (
    <div className="background">
      <div className="sort">
        <button className="sortbtn" onClick={sortByPrice}>Sort By Price</button>
      </div>
      <div className="products">
        {loading ? (<Loader/>) : (<div className="productList">{products.products.map((product) => (
          <ProductCard
            product={product}
            dispatch={props.dispatch}
          />
        ))}</div>)}
    </div>
    </div>
    
  );
};

export default Products;
