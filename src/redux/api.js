import axios from "axios"

export const loadProductsApi= async ()=>{
    await axios.get("http://localhost:8000/products")
}

export const addProductsApi= async (product)=>{
    await axios.post("http://localhost:8000/products", product)
}

export const addtoCartApi= async (product)=>{
    await axios.post("http://localhost:8000/cart", product)
}
export const loadCartApi = async()=>{
    await axios.get("http://localhost:8000/cart")
}

export const removeFromCartApi= async(productId)=>{
    await axios.delete(`http://localhost:8000/cart/${productId}`);
}