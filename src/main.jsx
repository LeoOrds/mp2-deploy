import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {About} from ".pages/about"
import {Faqs} from ".pages/Faqs"
import {Home} from ".pages/Home"
import {Login} from ".pages/Login"
import {Patientos} from ".pages/Patientos"
import {Reqapp} from ".pages/Reqapp"
import {Signup} from ".pages/Signup"
import {Wellness} from ".pages/Wellness"

const pages = createBrowserRouter([
  {
    path: "/mp2-deploy/",
    element: <App />,
    // errorElement: <Error404 />,
    children: [
      {
        path: "/mp2-deploy/about",
        element: <About />,
      },
      {
        path: "/mp2-deploy/button",
        element: <Faqs />,
      },
      {
        path: "/mp2-deploy/input",
        element: <Home />,
      },
      {
        path: "/mp2-deploy/checkbox",
        element: <Login />,
      },
      {
        path: "/mp2-deploy/radio",
        element: <Patientos />,
      },
      {
        path: "/mp2-deploy/switch",
        element: <Reqapp />,
      },
      {
        path: "/mp2-deploy/modal",
        element: <Signup />,
      },
      {
        path: "/mp2-deploy/toast",
        element: <Wellness />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={pages} />
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )
