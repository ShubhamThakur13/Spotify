import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../auth/ui/pages/Login'

const AppRoutes = () => {
    let route = createBrowserRouter([
        {
            path: '/',
            element:<AuthLayout/>,
            children: [
                {
                    path: '',
                    element: <Login/>
                }
            ]
        }
    ])
  return (<RouterProvider router={route}/>)
}

export default AppRoutes
