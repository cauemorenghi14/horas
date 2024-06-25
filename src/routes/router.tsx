import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MenuLateral } from "../layout/menu-lateral/MenuLateral";
import { Projetos } from "../pages/Projetos";
import { Relatorios } from "../pages/Relatorios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MenuLateral />,
        children: [
          {
            path: "/",
            element: <Projetos />,
          },
          {
            path: "/relatorios",
            element: <Relatorios />,
          },
        ],
      },
    ],
  },
]);
