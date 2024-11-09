import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./views/home";
import Layout from "./views/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
