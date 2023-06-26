import {
  
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
 
} from "redux-saga/effects";
import { ADD_TO_CART_START, CREATE_PRODUCT_START, CREATE_USER_START, LOAD_CART_START, LOAD_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, REMOVE_FROM_CART_START, REMOVE_FROM_PRODUCTS_START, SEARCH_PRODUCT } from "./actionTypes";

import { addToCartError, addToCartSuccess, createProductsError, createProductsSuccess, createUsersError, createUsersSuccess, loadCartError, loadCartSuccess, loadProductsError, loadProductsSuccess, removeFromCartError, removeFromCartSuccess, removeFromProductsError, removeFromProductsSuccess } from "./action";
import axios from "axios";

export function* onLoadProductsStartAsync() {
  try {
    const response = yield axios.get("http://localhost:5000/products")
    if (response.status === 200) {
      yield delay(500);
      yield put(loadProductsSuccess(response.data));
    }
  } catch (error) {
    yield put(loadProductsError(error.response.data));
  }
}

export function* onLoadCartStartAsync (){
  try {
    const response = yield axios.get("http://localhost:5000/cart")
    if (response.status === 200) {
      yield put(loadCartSuccess(response.data));
    }
  } catch (error) {
    yield put(loadCartError(error.response.data));
  }
}
export function* onCreateProductsStartAsync({payload}){
  try {
    const response = yield axios.post("http://localhost:5000/products",payload)
    if (response.status === 200) { 
      yield put(createProductsSuccess (response.data));
    }
  } catch (error) {
    yield put(createProductsError(error.response.data));
  }
}
export function* onAddToCartAsync({payload}){
  try {
    const response = yield axios.post("http://localhost:5000/cart",payload)
    if (response.status === 200) {
     
      yield put(addToCartSuccess (response.data));
    }
  } catch (error) {
    yield put(addToCartError(error.response.data));
  }
}

export function* onRemoveFromCartAsync({payload}){
  try {
    const response = yield axios.delete(`http://localhost:5000/cart/${payload}`)
    if (response.status === 200) {
      yield put(removeFromCartSuccess(payload));
    }
  } catch (error) {
    yield put(removeFromCartError(error.response.data));
  }
}

export function*  onCreateUsersStartAsync({payload}){
  try {
    const response = yield axios.post("http://localhost:5000/users",payload)
    if (response.status === 200) {
     
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.response.data));
  }
}

function* searchProducts(data){
  let result= yield fetch(`http://localhost:5000/products?q=${data.query}`) 
  result= yield result.json();
  console.warn("action called",result);
  yield put(loadProductsSuccess(result))
}

export function* onRemoveFromProductsAsync({payload}){
  try {
    const response = yield axios.delete(`http://localhost:5000/products/${payload}`)
    if (response.status === 200) {
      yield put(removeFromProductsSuccess(payload));
    }
  } catch (error) {
    yield put(removeFromProductsError(error.response.data));
  }
}

//receiving functions

export function* onLoadProducts() {
  yield takeEvery(LOAD_PRODUCTS_START, onLoadProductsStartAsync);
}

export function* onCreateProducts() {
  yield takeLatest(CREATE_PRODUCT_START, onCreateProductsStartAsync);
}

export function* onAddToCart() {
  yield takeLatest(ADD_TO_CART_START, onAddToCartAsync);
}

export function* onLoadCart() {
  yield takeEvery(LOAD_CART_START, onLoadCartStartAsync);
}

export function* onRemoveFromCart() {
  yield takeEvery(REMOVE_FROM_CART_START, onRemoveFromCartAsync);
}

export function* onCreateUsers() {
  yield takeLatest(CREATE_USER_START, onCreateUsersStartAsync);
}

export function* productSearch(){
  yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export function* removeProduct(){
  yield takeEvery(REMOVE_FROM_PRODUCTS_START, onRemoveFromProductsAsync)
}
//export part

const productSagas = [fork(onLoadProducts), fork(onLoadCart),fork(onRemoveFromCart), fork(onCreateProducts), 
  fork(onAddToCart), fork(onCreateUsers), fork(productSearch), fork(removeProduct)];

export default function* rootSaga() {
  yield all([...productSagas]);
}
