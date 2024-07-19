import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { Garden } from './Garden.jsx';
import {Contact} from './Contact.jsx';
import {ErrorPage} from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Garden />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
   {
    path: "contact",
    element: <Contact />,
  },
]);

export const App = () => {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};