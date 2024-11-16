import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/home";
import Layout from "./pages/layout";

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
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true
    }
});

function App() {
    return (
        <RouterProvider
            future={{
                v7_startTransition: true
            }}
            router={router}
        />
    )
}

export default App
