import imgWidget from "../../assets/images/shopping-cart.png";
import "./cardWidget.css";
import { Link } from "react-router-dom";

import React, { useContext } from 'react';
import { CartContext } from '../../context';


const CardWidget = () => {
    
    const { cartItems } = useContext(CartContext);
      
    return (
      <div>
        <Link  className="link-widget" to="/cart">
          <span class="span-widget">{cartItems.length}</span>
          <img className="card-img" src={imgWidget} alt="imagen del carrito" />
        </Link>
      </div>
    );
    }
  export default CardWidget;
    
