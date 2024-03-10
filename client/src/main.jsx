import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Events from './pages/Events/Events.jsx'
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile/Profile.jsx'
import './main.css'
import './GiftPot.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        action: () => {
          const token = localStorage.getItem('id_token');
          if (!token) {
            window.location.href = '/login';
          }
        }
      },
      {
        path: '/wedding',
        element: <Wedding />,
        action: () => {
          const token = localStorage.getItem('id_token');
          if (!token) {
            window.location.href = '/login';
          }
        }
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
      }
  // add additional pages as children
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
