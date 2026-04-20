import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../features/auth/ui/pages/Login'
import DashboardLayout from '../layouts/DashboardLayout'
import HomePage from '../../features/dashboard/ui/pages/HomePage'

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
        },

        {
            path: '/dashboard',
            element: <DashboardLayout/>,
            children:[
                {
                    path: '',
                    element: <HomePage/>
                }
            ]
        }
    ])
  return (<RouterProvider router={route}/>)
}

export default AppRoutes
