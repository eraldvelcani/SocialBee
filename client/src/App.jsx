import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <h1>About</h1>,
    },

])

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;