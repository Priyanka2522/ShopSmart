import { useContext } from "react";
import CartContext from "../context/card/CartContext";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Cart.css';

function CartItem (item)  {
    const { removeItem } = useContext(CartContext);
    return<>
        <div className="cart">

            <img src={`data:image/png;base64,${item.product_image}`} className="product-cart-image" />
            <div className="sub-cart">
                <div style={{ display: "fl" }}>
                    <label className="product_label">Name: </label>
                    <p className="product-info">  {item.product_name}</p></div>
                <label className="product_label">Cost: </label>
                <p className="product-info"><CurrencyRupeeIcon fontSize="small" />{item.product_price}</p>
                <label className="product_label">Description: </label>
                <p className="product-info">{item.product_description}</p>
                <label className="product_label">Quantity: </label>
                <p className="product-info">{item.product_quantity}</p>
                <label className="product_label">Type: </label>
                <p className="product-info">{item.product_type}</p>
                <label className="product_label">Category: </label>
                <p className="product-info">{item.product_category}</p>
                <button className="btn buyNow-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            
        </div>
        </> 
   
}

export default CartItem;