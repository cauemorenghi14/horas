import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { Home } from "../pages/Home"
import { MenuLateral } from "../layout/menu-lateral/MenuLateral"
import { Usuarios } from "../pages/Usuarios"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MenuLateral />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: '/usuarios',
                        element: <Usuarios />
                    }
                ]
            }
        ]
    }
])