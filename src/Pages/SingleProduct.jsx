import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { addToCartStart } from '../redux/action';
import Navbar from '../Components/Navbar';

const SingleProduct = () => {
  const { products } = useSelector(state => state.data);
  const { id } = useParams();
  const singleProduct = products.find((item) => item.id === Number(id));
  const dispatch = useDispatch()
  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartStart(singleProduct));
    alert("Added successfully")
  }

  return (
    <div className="bg-white">
      <Navbar/>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  sm:px-6 sm:py-32 py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-800">{singleProduct.description}</p>
          <button onClick={addToCart} style={{ backgroundColor: 'blue', padding: "10px 20px", marginTop: "25px", color: "white", cursor: "pointer" }}>ADD TO CART</button>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xl text-gray-900">Title</dt>
              <dd className="mt-2 text-md text-gray-800">{singleProduct.title}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xl text-gray-900">Country of Origin</dt>
              <dd className="mt-2 text-md text-gray-800">INDIA</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xl text-gray-900">Price</dt>
              <dd className="mt-2 text-md text-gray-800"> ₹ {singleProduct.price}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xl text-gray-900">Brand</dt>
              <dd className="mt-2 text-md text-gray-800">{singleProduct.brand}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="text-xl text-gray-900">Discount and Rating</dt>
              <dd className="mt-2 text-md text-gray-800">Discount:{singleProduct.discountPercentage}</dd>
              <dd className="mt-2 text-md text-gray-800">Rating:{singleProduct.rating}/5</dd>
            </div>

          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={singleProduct.images[0]}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={singleProduct.images[1]}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={singleProduct.images[2]}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src={singleProduct.images[3]}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}

export default SingleProduct