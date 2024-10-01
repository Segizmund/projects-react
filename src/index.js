import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import App from './App';
import Layout from './layout/Layout';
import Counter from './counter/Counter';
import Modal from './modal/Modal';
import Quiz from './quiz/Quiz';

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
                element: <Counter/>,
            },
            {
                path: "/modal",
                element: <Modal/>,
            },
            {
                path: "/quiz",
                element: <Quiz/>,
            },
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