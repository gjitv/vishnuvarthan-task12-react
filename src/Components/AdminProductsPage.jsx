import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loadProductsStart, removeFromProductsStart } from '../redux/action';
import "../Components/Electronics.css"
import { Link } from 'react-router-dom';
import "./Admin.css"
import AdminDash from "../Pages/AdminDash"

export const AdminProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsStart())
  }, [])
  const { products } = useSelector(state => state.data)
  const handleDelete=(id, title)=>{
    console.log(title)
    if(window.confirm(`Delete ${title}`)){   
    dispatch(removeFromProductsStart(id));
    }
}
  return (
    <div className='pb-5  bg-gray-100'>
      <AdminDash />
      <div>
        <p className='text-2xl  bg-white md:py-5 py-2 text-center border-b-2 border-gray-100'>ALL PRODUCTS</p>
      </div>
      <div className="flex px-5 flex-row flex-wrap bg-white shadow-md" >
        {products.map((item) => {
          return (
            <div key={item.id} className=" lg:w-1/4 w-1/2 items-center text-center flex flex-col  justify-center md:gap-5 gap:3 lg:h-96 From cursor-pointer">
              <div>
              <Link to={`/products/${item.id}`}>
                <div className="lg:h-4/6 md:3/6 flex justify-center">
                  <img src={item.thumbnail} alt="img" className="h-full md:w-3/4 w-4/5 py-3" />
                </div>
                <div className="div">
                  <p className="">{item.title}</p>
                  <p className="text-lime-700"> From ₹{item.price}</p>
                </div>
              </Link>
              <button className='text-red-500 text-sm delete' onClick={() => {
                handleDelete(item.id, item.title)
              }} >Delete</button>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )

}
