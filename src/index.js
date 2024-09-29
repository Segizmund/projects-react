import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header/header';
import Layout from './layout/Layout';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/counter",
                element: <div>О нас</div>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>
    </>
);

reportWebVitals();