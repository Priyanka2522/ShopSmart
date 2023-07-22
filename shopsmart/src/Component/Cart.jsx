import { useContext } from "react";
import CartContext from "../context/card/CartContext";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Cart.css';
import CartItem from './CartItem';
import Navbar from "./Navbar";

const Cart = () =>{

  const { cartItems} =useContext(CartContext);

  return(
    <>
    <Navbar></Navbar>
      <div>
        {cartItems.length === 0 ?(<h4 style={{ display:"flex",justifyContent:"center",marginTop:"100px"}}>Cart is Empty</h4>):
        (
          <div>
            {cartItems.map(item =>(
              <CartItem key={item.id} item={item}></CartItem>
            ))}
          </div>
        )}

      </div>
      {/* <div>
        <CurrencyRupeeIcon/>
        {cartItems.reduce((amount,item)=>item.product_price + amount,0)}
      </div> */}
    </>
  )

}

export default Cart;

























































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import './Cart.css';
// import { useLocation} from "react-router-dom";
// import Navbar from "./Navbar";
// import Products from "./Products";
// import { useNavigate } from 'react-router-dom';


// const Cart = (props) => {
  


//  return (
//     <div>
//       <Navbar></Navbar>

//       <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>Cart List</h1>
//       <h1>{props.product_name}</h1>
// {/* 
//       {Array.isArray(cartItems) ? (
//         <ul>
//           {cartItems.map((item) => (
//              <div className="cart">
               
//                  <img src={`data:image/png;base64,${item.product_image}`} className="product-cart-image"/>
//                  <div className="sub-cart">
//                     <div style={{display:"fl"}}>
//                     <label className="product_label">Name: </label> 
//                     <p className="product-info">  {item.product_name}</p></div>
//                     <label className="product_label">Cost: </label>
//                     <p className="product-info"><CurrencyRupeeIcon fontSize="small"/>{item.product_price}</p>
//                     <label className="product_label">Description: </label>
//                     <p className="product-info">{item.product_description}</p> 
//                     <label className="product_label">Quantity: </label>
//                      <p className="product-info">{item.product_quantity}</p>
//                     <label className="product_label">Type: </label> 
//                     <p className="product-info">{item.product_type}</p>
//                     <label className="product_label">Category: </label> 
//                     <p className="product-info">{item.product_category}</p>
                  
//                   <div className="btns">
//                   <button  className=" btn buyNow-btn" onClick={handleCheckout}>Checkout</button>
//                   <button className=" btn buyNow-btn" onClick={handleGoToCart}>Buy Now</button>
//                   <button className=" btn buyNow-btn" >Remove</button>
//                   </div>
//                   </div>
//               </div>
//           ))}
//         </ul>
        
        
//       ) : (
//         <p>No products found.</p>
//       )} */}
//     </div>
   
//   );
// };

// export default Cart;

































// // const location = useLocation();
// //   const navigate = useNavigate();
// //   // const { cartItems } = location.state;

// //   if (location.state && location.state.cartItems) {
// //     const { cartItems } = location.state;
// //     // Rest of your code that uses cartItems
// //   } else {
// //     // Handle the case when cartItems are not available
// //   }

// //   const handleCheckout = () => {
// //     // Pass the cart items to the cart page using state or query parameters
// //     navigate.push({
// //       pathname: '/cart',
// //       state: { cartItems },
// //     });
// //   };


// //   const handleGoToCart =()=>
// //   {
// //     <Products/>
// //   }

  
// //   // API Integration or Data fetch from API
// // const fetchData = async () => {
// //     try {
// //       const response = await axios.get("http://192.168.0.48:5000/shopsmart/products/");
// //       console.log("res",response.data.products);
// //       setProducts(response.data.products);
// //     } catch (error) {
// //       console.log("Error fetching data:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);