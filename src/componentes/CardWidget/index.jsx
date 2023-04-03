import imgWidget from "../../assets/images/shopping-cart.png";
import "./CardWidget.css";
import { Link } from "react-router-dom";

import React, { useContext } from 'react';
import { CartContext } from '../../context';


const CardWidget = () => {
    
    const { cartItems } = useContext(CartContext);
    
  
    return (
      <div>
        <Link to="/cart"></Link>
       
        <span>{cartItems.length}</span>
        <img className="card-img" src={imgWidget} alt="imagen del carrito" />
      </div>
    );
  };
  
  export default CardWidget;

