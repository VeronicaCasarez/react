import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ItemRoot from './routes/itemRoot';
import './index.css';
import Layout from './componentes/Layout';
import Cart from './routes/Cart';
import Checkout from './routes/checkout';
import ErrorPage from './routes/error';


import { CartProvider } from '../src/context/index';
import 'bootstrap/dist/css/bootstrap.min.css';

//routes
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};


const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
 {path:'/',
  errorElement:<ErrorPage/>,
  element: <Layout/>,
 children: [
  {
  path: "/",
  element: <Root/>,
},
{
  path: "/category/:id",
  element: <Root/>,
},
{
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
