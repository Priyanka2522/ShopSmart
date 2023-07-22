import { useReducer } from "react";
import CardContext from './CartContext';
import CardReducer from './CartReducer';
import {ADD_TO_CART,REMOVE_ITEM} from '../Types';

const CardState = ({children}) =>{
    const initialState = {
        showCart : false,
        cartItems : [],
    }

    const [state , dispatch] = useReducer(CardReducer,initialState);
    
    const addToCart = item =>{
        dispatch ({type: ADD_TO_CART , payload:item})
    }

    const removeItem = id =>{
        dispatch ({type:REMOVE_ITEM , payload:id})
    }

    return(
        <CardContext.Provider value={{
            showCart : state.showCart,
            cartItems : state.cartItems,
            addToCart,
            removeItem
        }}>
            {children}

        </CardContext.Provider>
    )
}

export default CardState;