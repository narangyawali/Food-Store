import { createBrowserRouter } from "react-router-dom";
import Hero from "../pages/Hero";
import Index from "../components/Index";
import Cart from "../pages/Cart";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/heroPage',
        children: [
            {
                index: true,
                element: <Hero />
            },
            {
                path: 'storeCart',
                element: <Cart />
            },
        ]
    }
])

export default Router;