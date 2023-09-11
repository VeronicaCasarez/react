import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImage from '../assets/images/error-page.jpg'; 
import NavBar from '../componentes/NavBar';

const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div>
        <NavBar/>
        <h1>Error</h1>
        <p>Se ha producido un error inesperado: {error.message}</p>
        <img src={errorImage} alt="Error inesperado" />
    </div>
  );
};

export default ErrorPage;