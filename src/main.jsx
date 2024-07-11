import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom"


import App from './App.jsx'
import './index.css'
import { Login } from './pages/Login.jsx'
import { Home } from './pages/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { ProtectedRoutes } from './routes/ProtectedRoutes.jsx'
import { element } from 'prop-types'
import { Dashboard } from './components/Dashboard.jsx'

// v6.4 >
// createBrowserRouter -> RouterProvider
// v6.4 <
// BrowserRouter

// Suspense
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "home",  
      //   element: <Home />
      // },
      {
        element: <Dashboard headingColor="blue" />,
        children: [
          {
            path: "messages",
            element: <>Poraki</>
          },
          {
            path: "tasks",
            element: <>Zadaci</>
          }
        ]
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>,
)
