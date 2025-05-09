import { createBrowserRouter } from 'react-router-dom';
import Notfound from '../pages/Notfound';
import Dashboard from '../pages/Dashboard';
import Layout from '../Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "*",
                element: <Notfound />,
            },
        ]
    },


]);
