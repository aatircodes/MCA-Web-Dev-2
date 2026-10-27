import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Product from './Product';
import Home from './Home';
function App() {

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/product/:id",
        element: <Product />
    }
]);

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
