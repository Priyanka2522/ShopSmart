import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Cart.css';
import Navbar from "./Navbar";
import Products from "./Products";


const Cart = () => {
  const [products, setProducts] = useState([]);

  const handleGoToCart =()=>
  {
    <Products/>
  }

  
  // API Integration or Data fetch from API
const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.0.48:8000/shopsmart/products/");
      console.log("res",response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


 return (
    <div>
      <Navbar></Navbar>

      <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>Cart List</h1>

      {Array.isArray(products) ? (
        <ul>
          {products.map((item) => (
             <div className="cart">
               
                 <img src={`data:image/png;base64,${item.product_image}`} className="product-cart-image"/>
                 <div className="sub-cart">
                    <div style={{display:"fl"}}>
                    <label className="product_label">Name: </label> 
                    <p className="product-info">  {item.product_name}</p></div>
                    <label className="product_label">Cost: </label>
                    <p className="product-info"><CurrencyRupeeIcon fontSize="small"/>{item.product_price}</p>
                    <label className="product_label">Description: </label>
                    <p className="product-info">{item.product_description}</p> 
                    <label className="product_label">Quantity: </label>
                     <p className="product-info">{item.product_quantity}</p>
                    <label className="product_label">Type: </label> 
                    <p className="product-info">{item.product_type}</p>
                    <label className="product_label">Category: </label> 
                    <p className="product-info">{item.product_category}</p>
                  
                  <div className="btns">
                  <button className=" btn buyNow-btn" onClick={handleGoToCart}>Buy Now</button>
                  <button className=" btn buyNow-btn" >Remove</button>
                  </div>
                  </div>
              </div>
          ))}
        </ul>
        
        
      ) : (
        <p>No products found.</p>
      )}
    </div>
   
  );
};

export default Cart;
















