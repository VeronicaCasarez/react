import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ItemRoot from './routes/itemRoot';
import './index.css';
import Layout from './componentes/Layout';
import Cart  from './routes/Cart';

import { CartProvider } from '../src/context/index';
import 'bootstrap/dist/css/bootstrap.min.css';

//routes
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
  element: <div>Hello world!</div>,
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
