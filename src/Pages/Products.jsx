import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loadProductsStart } from '../redux/action';
import "../Components/Electronics.css"
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
const Products = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsStart())
  }, [])
  const { products } = useSelector(state => state.data)
  return (
    <div>
      <Navbar />
      <div className='py-5  bg-gray-100'>
        <div>
          <p className='text-2xl  bg-white md:py-5 py-2 text-center border-b-2 border-gray-100'>ALL PRODUCTS</p>
        </div>
        <div className="flex px-5 flex-row flex-wrap bg-white shadow-md" >
          {products.map((item) => {
            return (

              <div key={item.id} className=" lg:w-1/4 w-1/2 items-center text-center flex flex-col  justify-center md:gap-5 gap:3 lg:h-96 From cursor-pointer">
                <Link to={`/products/${item.id}`}>
                  <div className="lg:h-4/6 md:3/6 flex justify-center">
                    <img src={item.thumbnail} alt="img" className="h-full md:w-3/4 w-4/5 py-3" />
                  </div>
                  <div className="div">
                    <p className="text-sm">{item.title}</p>
                    <p className="">{item.category}</p>
                    <p className="text-lime-700"> From ₹{item.price}</p>
                  </div>
                </Link>
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products