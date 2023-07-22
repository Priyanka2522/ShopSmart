import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Products.css';
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import CartContext from "../context/card/CartContext";


const Products = () => {
  const [cartData, setCartData] = useState([]);
  const [filterData, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();
  let page_num = 1;
  let products_per_page = 4;


  const [productData, setProductData] = useState({
    product_name: '',
    product_image: '',
    product_price: '',
    product_description: '',


  });

  const fetchData = async () => {
    try {

      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_num, products_per_page })
      };

      const response = await fetch('http://192.168.0.48:5000/shopsmart/products/', request);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data.data);

      console.log('Data:', data);
      console.log("Product data", products);

    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // API Integration or Data fetch from API


  useEffect(() => {
    fetchData();
  }, []);


  const handleLike = () => { }




  // Handle add to cart action
  // const addToCart = (product_id) => {
  //   axios
  //   .post("", { product_id })
  //   .then((response) => {
  //     // Process the response if needed
  //     console.log("Second API Response:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data from second API:", error);
  //   });
  //   // setCartData(response.data);
  //   navigate('/cart');
  // };


  return (
    <div>
      <Navbar></Navbar>

      <h1 style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>Product List</h1>
      {Array.isArray(products) ? (
        <ul>
          {products.map((item) => (
            <div className="product" key={item.id}>
              <img src={`data:image/png;base64,${item.product_image}`} className="product-image" />
              <div className="produc-item">
                <h5>{item.product_name}</h5>
                <p className="product-cost"><CurrencyRupeeIcon fontSize="small" />{item.product_price}</p>
              </div>
              {/* <p> {item.product_description}</p> */}
              <p>{item.page_num}</p>
              <p>{item.products_per_page}</p>
              <button className=" btn addCart-btn" onClick={() => addToCart(item)}>Add To Cart</button>
              <button className="like-btn"><FavoriteBorderIcon fontSize="large" /></button>
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






