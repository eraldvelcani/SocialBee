import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Hero, Dashboard, Login, Register } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/hero',
        element: <Hero />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    }
])

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;