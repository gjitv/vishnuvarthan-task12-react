import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Products from "./Pages/Products";
import Cart from "./Components/Cart";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Pages/Login";
import AdminDash from "./Pages/AdminDash";
import CreateNew from "./Components/CreateNew";
import { AdminProductsPage } from "./Components/AdminProductsPage";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/products' element={<Products/>}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admin' element={<AdminDash/>}/>
            <Route path='/admin/addnew' element={<CreateNew/>}/>
            <Route path='/admin/products' element={<AdminProductsPage/>}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
