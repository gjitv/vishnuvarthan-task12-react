import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProductsStart } from '../redux/action';
import AdminDash from '../Pages/AdminDash';
const initialState = {
  title: "",
  description: "",
  price: "",
  discountPercentage: "",
  rating: "",
  stock: "",
  brand: "",
  category: "",
  thumbnail: ""
}
const CreateNew = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail } = formValue;
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && price && discountPercentage && rating && stock && brand && category) {
      dispatch(createProductsStart(formValue));
      alert("Added successfully")
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }
  return (
    <div>
      <AdminDash />
      <div className="w-full flex flex-col items-center justify-center p-5">
        <form onSubmit={handleSubmit} className='flex flex-wrap md:w-3/4 flex-col gap-5' >
          <p className=' text-2xl text-bold py-5'>Add New Products</p>
          <p>Product Name</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder='Product Title' name='title' value={title} onChange={onInputChange} required />
          <p>Description</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder='Description' name='description' value={description} onChange={onInputChange} required />
          <p>Price</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='Price' name='price' value={price} onChange={onInputChange} required />
          <p>Rating</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='rating' name='rating' value={rating} onChange={onInputChange} required />
          <p>Discount Percentage</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='discountPercentage' name='discountPercentage' value={discountPercentage} onChange={onInputChange} required />
          <p>Stock</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='stock' name='stock' value={stock} onChange={onInputChange} required />
          <p>Brand</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder='brand' name='brand' value={brand} onChange={onInputChange} required />
          <p>Category</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder='category' name='category' value={category} onChange={onInputChange} required />
          <button type='submit ' className="bg-blue-500 w-48 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-8" >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNew