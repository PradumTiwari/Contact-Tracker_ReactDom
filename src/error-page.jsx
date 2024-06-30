import React from 'react'
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
  return (
    <div>error-page Made by Pradum
        <p>{error.statusText||error.message}</p>
    </div>
  )
}

export default ErrorPage;