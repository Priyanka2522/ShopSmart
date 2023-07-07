import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Products.css';
import Navbar from "./Navbar";



const Products = () => {
  const [products, setProducts] = useState([]);

  const handleLike = () =>
  {}

  const handleAddToCart = () =>
  { }
  
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
      
      <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>Product List</h1>

      {Array.isArray(products) ? (
        <ul>
          {products.map((item) => (
             <div className="product">
                 <img src={`data:image/png;base64,${item.product_image}`} className="product-image"/>
                 <div className="produc-item">
                 <h5>{item.product_name}</h5>
                 <p className="product-cost"><CurrencyRupeeIcon fontSize="small"/>{item.product_price}</p>
                 </div>
                  <p> {item.product_description}</p>
                  <button className=" btn addCart-btn">Add To Cart</button>
                  <button className="like-btn"><FavoriteBorderIcon fontSize="large"/></button>
              </div> 
          ))}
        </ul>
        
        
      ) : (
        <p>No products found.</p>
      )}
    </div>
   
  );
};

export default Products;


















// import React from "react";
// import axios from 'axios';
// import { useState, useEffect } from "react";
// import Navbar from "./Navbar";

// const Products = () =>
// {
//     const [products , setProducts]=useState([]);
//     const [loading , setLoading]= useState(true)    ;

//     const fetchData = async () => {
//         setLoading(true);
//         try{
//             const response = await fetch("http://192.168.0.48:8000/shopsmart/products/");
//             const data = await response.json();
//             if(data)
//             {
//             setProducts(data);
//             }
//             console.log("data",products);
//             console.log("data",products);
//         }
//         catch(error)
//         {
//             console.error(error);
//         }
        
//         setLoading(false);
        
//       };

//     useEffect(() => {
//         fetchData();
//       }, []);

//     return(
//         <div>
//             <Navbar/>
//             {loading ? 'Loading...' :(
//                 <div>
//                     { products.map(item =>(
//                         <div key={item.product_id}>
//                             <p>{item.product_name}</p>

//                         </div>
//                     ))}
                 
//                 </div>
//             )}
//         </div>
//     );
// };
// export default Products;































// // import { useEffect, useState } from "react";

// // const Products = () => {
// //     const [data, setData] = useState([]);
// //     const [loading, setLoading] = useState(data);
// //     const [filter, setFilter] = useState(false);
// //     let componentMounted = true;

// //     useEffect(() => {
// //         getProduct();
// //     }, []);

// //     const getProduct = async () => {
// //         setLoading(true);
// //         const response = await fetch("http://192.168.0.48:8000/shopsmart/home/");
// //         const product_data = await response.json;
// //         setData(product_data);
// //         // setData(await response.clone().json());
// //         // const details = setFilter(await response.json());
// //         setLoading(false);
// //         console.log("data", product_data);
      

// //         return () => {
// //             componentMounted = false;
// //         }
// //     }



// //     // const [data,setData] = useState([]);

// //     // useEffect(() => {
// //     //     fetchProducts();
// //     //   }, []);

// //     //   const fetchProducts = async () => {
// //     //     try {
// //     //       const response = await fetch('http://192.168.0.48:8000/shopsmart/home/');
// //     //       const product_data = await response.json();
// //     //       setData(product_data);
// //     //       console.log("productdata",product_data);
// //     //       console.log("data",data);
// //     //     } 

// //     //     catch (error) {
// //     //       console.log('Error:', error);
// //     //     }
// //     //   };

// //     //   {data.map((user) => {
// //     //     return(

// //     //         <div key={user.id}>
// //     //              <h2>Products</h2>
// //     //         <li>{user.product_name}</li>

// //     //   </div>
// //     //     )})}


// // };
// // export default Products;