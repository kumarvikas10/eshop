export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELTE_FROM_CART = "DELETE_FROM_CART";
export const DELTE_FROM_PRODUCT_LIST = "DELETE_FROM_PRODUCT_LIST";
export const PRODUCT_SORT_BY_PRICE = "PRODUCT_SORT_BY_PRICE";

export function handleProductFetch() {
  const url = `https://my-json-server.typicode.com/kumarvikas10/ecommerce-api/products`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        console.log();
        //dispatch an action
        dispatch(addProducts(products));
      });
  };
}

export function handleProductEdit(product) {
    console.log(product)
    return function (dispatch) {
        dispatch(editProduct(product));
    };
}


export function editProduct(product) {
  console.log(product);
  return {
    type: EDIT_PRODUCT,
    product,
  };
}

export function addProducts(product) {
  console.log(product)
  return {
    type: ADD_PRODUCTS,
    product,
  };
}

export function addProduct(product) {
  console.log(product)
  return {
    type: ADD_PRODUCT,
    product,
  };
}

export function handlecartaddition(product) {
  console.log(product)
  return function (dispatch) {
      dispatch(addtocart(product));
  };
}

export function addtocart(product) {
  console.log(product)
  return {
    type:ADD_TO_CART,
    product,
  };
}

export function handleProductDelete(product) {
  console.log(product)
  return function (dispatch) {
      dispatch(deletefromcart(product));
  };
}

export function deletefromcart(product) {
  console.log(product)
  return {
    type:DELTE_FROM_CART,
    product,
  };
}

export function handleProductRemove(product) {
  console.log(product)
  return function (dispatch) {
      dispatch(deletefromProductList(product));
  };
}

export function deletefromProductList(product) {
  console.log(product)
  return {
    type:DELTE_FROM_PRODUCT_LIST,
    product,
  };
}

export function handleSortPrice(product) {
  console.log(product)
  return function (dispatch) {
      dispatch(productsortbyprice(product));
  };
}

export function productsortbyprice(product) {
  console.log(product)
  return {
    type:PRODUCT_SORT_BY_PRICE,
    product,
  };
}