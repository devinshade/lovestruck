import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx'

import Home from './pages/Home/Home.jsx'
import Events from './pages/Events/Events.jsx'
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile/Profile.jsx'
import Oops from './pages/Oops/oops.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './GiftPot.css'

import DonationForm from './components/DonationForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: '/donate',
        element: <DonationForm />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: '/oops',
        element: <Oops/>
      }
    ]
  }
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));
