import React from 'react'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Four from './pages/Four'
import Five from './pages/Five'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/', element: <One /> },
                { path: '/one', element: <One /> },
                { path: '/two', element: <Two /> },
                { path: '/three', element: <Three /> },
                { path: '/four', element: <Four /> },
                { path: '/five', element: <Five/> }
            ]
        }
    ])
    return <RouterProvider router = {router} />
}
export default App