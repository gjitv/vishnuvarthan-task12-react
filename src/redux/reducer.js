import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_START,
  ADD_TO_CART_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_START,
  CREATE_PRODUCT_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  LOAD_CART_ERROR,
  LOAD_CART_START,
  LOAD_CART_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  REMOVE_FROM_CART_START,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_PRODUCTS_FAILURE,
  REMOVE_FROM_PRODUCTS_START,
  REMOVE_FROM_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_START:
    case LOAD_CART_START:
    case CREATE_PRODUCT_START:
    case CREATE_USER_START:
    case ADD_TO_CART_START:
    case REMOVE_FROM_CART_START:
    case REMOVE_FROM_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case LOAD_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
      case REMOVE_FROM_PRODUCTS_SUCCESS:
        return{
          ...state,
          loading:false,
          products: state.products.filter((item) => item.id !== action.payload),
        }
    case CREATE_PRODUCT_SUCCESS:
    case ADD_TO_CART_SUCCESS:
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOAD_PRODUCTS_ERROR:
    case CREATE_PRODUCT_FAILURE:
    case ADD_TO_CART_FAILURE:
    case LOAD_CART_ERROR:
    case REMOVE_FROM_CART_FAILURE:
    case CREATE_USER_FAILURE:
    case REMOVE_FROM_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
