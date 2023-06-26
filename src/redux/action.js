import { LOAD_PRODUCTS_ERROR, LOAD_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, CREATE_PRODUCT_START, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE, ADD_TO_CART_START, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE, LOAD_CART_START, LOAD_CART_SUCCESS, LOAD_CART_ERROR, REMOVE_FROM_CART_START, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_CART_FAILURE, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, SEARCH_PRODUCT, REMOVE_FROM_PRODUCTS_START, REMOVE_FROM_PRODUCTS_SUCCESS, REMOVE_FROM_PRODUCTS_FAILURE} from "./actionTypes";

//view products
export const loadProductsStart=()=>({
    type:LOAD_PRODUCTS_START
});

export const loadProductsSuccess=(products)=>({
    type:LOAD_PRODUCTS_SUCCESS,
    payload:products
});

export const loadProductsError=(error)=>({
    type:LOAD_PRODUCTS_ERROR,
    payload:error
})

//create product
export const createProductsStart=(product)=>({
    type:CREATE_PRODUCT_START,
    payload:product
});

export const createProductsSuccess=()=>({
    type:CREATE_PRODUCT_SUCCESS,
    
});

export const createProductsError=(error)=>({
    type:CREATE_PRODUCT_FAILURE,
    payload:error
})

//add to cart

export const addToCartStart=(product)=>({
    type:ADD_TO_CART_START,
    payload:product
});

export const addToCartSuccess=()=>({
    type:ADD_TO_CART_SUCCESS,
    
});

export const addToCartError=(error)=>({
    type:ADD_TO_CART_FAILURE,
    payload:error
})

//load cart

export const loadCartStart=()=>({
    type:LOAD_CART_START
});

export const loadCartSuccess=(cart)=>({
    type:LOAD_CART_SUCCESS,
    payload:cart
});

export const loadCartError=(error)=>({
    type:LOAD_CART_ERROR,
    payload:error
})

//remove from cart
export const removeFromCartStart=(productId)=>({
    type:REMOVE_FROM_CART_START,
    payload:productId
});

export const removeFromCartSuccess=(productId)=>({
    type:REMOVE_FROM_CART_SUCCESS,
    payload:productId 
});

export const removeFromCartError=(error)=>({
    type:REMOVE_FROM_CART_FAILURE,
    payload:error
})

//create User

export const createUsersStart=(product)=>({
    type:CREATE_USER_START,
    payload:product
});

export const createUsersSuccess=()=>({
    type:CREATE_USER_SUCCESS,
    
});

export const createUsersError=(error)=>({
    type:CREATE_USER_FAILURE,
    payload:error
})

//product search
export const productSearch= (query)=>{
    
    return{
        type:SEARCH_PRODUCT,
        query
    }
}

//Remove from products
export const removeFromProductsStart=(productId)=>({
    type:REMOVE_FROM_PRODUCTS_START,
    payload:productId
});

export const removeFromProductsSuccess=(productId)=>({
    type:REMOVE_FROM_PRODUCTS_SUCCESS,
    payload:productId 
});

export const removeFromProductsError=(error)=>({
    type:REMOVE_FROM_PRODUCTS_FAILURE,
    payload:error
})
