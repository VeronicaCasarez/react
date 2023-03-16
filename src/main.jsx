import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ItemRoot from './routes/itemRoot';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//routes
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {//este es el home
    path: "/",
    element: <Root/>,
  },
  {//estas son las catrgorias ejemplo adidas puma
    path: "/category/:id",
    element: <Root/>,
  },
  {//este es el detalle de cada producto
    path: "/item/:id",
    element: <ItemRoot/>,
  },
  {
    path: "/cart",
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
