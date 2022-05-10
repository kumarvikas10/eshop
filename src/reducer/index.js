import {
  ADD_PRODUCTS,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  ADD_TO_CART,
  DELTE_FROM_CART,
  DELTE_FROM_PRODUCT_LIST,
  PRODUCT_SORT_BY_PRICE,
} from "../action";
import { combineReducers } from "redux";

const initialProductState = {
  products: [],
};

export function products(state = initialProductState, action) {
  console.log("PRODUCTS REDUCER");
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.product,
      };
    case EDIT_PRODUCT:
      const filterArray = state.products.filter(
        (product) => product.id !== action.product.id
      );
      filterArray.push(action.product);
      console.log(filterArray);
      return {
        ...state,
        products: filterArray,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.product, ...state.products],
      };
    case DELTE_FROM_PRODUCT_LIST:
      const deleteArray = state.products.filter(
        (product) => product.id !== action.product.id
      );
      console.log(deleteArray);
      return {
        ...state,
        products: deleteArray,
      };
      case PRODUCT_SORT_BY_PRICE:
        const eitherSort = (arr = []) => {
          const sorter = (a, b) => {
             return +a.price - +b.price;
          };
          arr.sort(sorter);
       };
       eitherSort(state.products);
       console.log(state.products)
      return {
        ...state,
        products: [...state.products]
      };
    default:
      return state;
  }
}

const initialCartState = {
  cart: [],
};

export function cart(state = initialCartState, action) {
  console.log("CART REDUCER");
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };
    case DELTE_FROM_CART:
      const filterArray = state.cart.filter(
        (product) => product.id !== action.product.id
      );
      console.log(filterArray);
      return {
        ...state,
        cart: filterArray,
      };
    default:
      return state;
  }
}

export default combineReducers({
  products,
  cart,
});
