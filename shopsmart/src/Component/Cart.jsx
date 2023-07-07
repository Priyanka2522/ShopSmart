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

      <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px" , color:"red"}}> Product List</h1>

      {Array.isArray(products) ? (
        <ul>
          {products.map((item) => (
             <div className="cart">
               
                 <img src={`data:image/png;base64,${item.product_image}`} className="product-cart-image"/>
                 <div className="sub-cart">
                 <h5><label>Name: </label> {item.product_name}</h5>
                 <h5><label>Cost: </label><CurrencyRupeeIcon fontSize="small"/> {item.product_price}</h5>
                  <h5><label>Description: </label> {item.product_description}</h5>
                  <h5><label>Quantity: </label> {item.product_quantity}</h5>
                  <h5> <label>Type: </label> {item.product_type}</h5>
                  <h5><label>Category: </label> {item.product_category}</h5>
                  

                  <button className=" btn buyNow-btn" onClick={handleGoToCart}>Go To Cart</button>
                  <button className=" btn buyNow-btn" >Buy Now</button>
                 
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
















