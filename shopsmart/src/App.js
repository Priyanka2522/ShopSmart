import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Register from './Component/Register';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Products from './Component/Products';
import About from './Component/About';
import Contact from './Component/Contact';
import Cart from './Component/Cart';
import { useEffect } from 'react';
import {CartItem} from './CartItem.js';


function App() {
 
  return (
    <div className="App">

   <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/navbar' element={<Navbar />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>   

      {/* <Home/> */}
      {/* <Products/> */}

      
  
    </div>
  );
}

export default App;
