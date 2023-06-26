import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const AdminDash = () => {
  return (
    <div>
      <div className='bg-blue-500 h-16 flex gap-3 justify-center'>
          <p className='text-white text-xl text-bolder py-5'>SHOPPIFY ADMIN DASHBOARD</p>
      </div>
      <div className='bg-blue-500 h-16 flex gap-3 justify-center'>
        <button className='text-white px-2 my-3  bg-blue-700 rounded-lg'> <Link to="/admin/addnew">Add new Product</Link></button>
        <button className='text-white px-2 my-3 bg-blue-700 rounded-lg'><Link to="/admin/products" >View Products</Link></button>
      </div>
    </div>
  )
}


export default AdminDash