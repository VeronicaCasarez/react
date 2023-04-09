import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ItemRoot from './routes/itemRoot';
import './index.css';
import Layout from './componentes/Layout';
import Cart from './routes/cart';
import Checkout from './routes/checkout';


import { CartProvider } from '../src/context/index';
import 'bootstrap/dist/css/bootstrap.min.css';

//routes
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABCtUIbO0BW6qP6go6UF07MKN7UyQcnY8",
  authDomain: "ecommercecasarez.firebaseapp.com",
  projectId: "ecommercecasarez",
  storageBucket: "ecommercecasarez.appspot.com",
  messagingSenderId: "178593045051",
  appId: "1:178593045051:web:59660b2b0dd3f452471a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
 {element: <Layout/>,
 children: [
  {//este es el home
  path: "/",
  element: <Root/>,
},
{//estas son las categorias ejemplo chocolate, alfajores, productos de la patagonia
  path: "/category/:id",
  element: <Root/>,
},
{//este es el detalle de cada producto
  path: "/item/:id",
  element: <ItemRoot/>,
},
{
  path: "/cart",
  element: <Cart/>,
},
{
  path: "/checkout",
  element: <Checkout/>,
}
 ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  
      <RouterProvider router={router} />
    </CartProvider> 
  </React.StrictMode>,
)
