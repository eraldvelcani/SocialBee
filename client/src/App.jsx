import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Hero, Dashboard, Login, Register, Error, Profile, AllPosts, AddPost, Admin } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                element: <Hero />,
                index: true //display on parent route
            },
            {
                path: 'hero',
                element: <Hero />,
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        index: true,
                        element: <AddPost />
                    },
                    {
                        path: 'all-posts',
                        element: <AllPosts />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'admin',
                        element: <Admin />
                    },
                ]
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;