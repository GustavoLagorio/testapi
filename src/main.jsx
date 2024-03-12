import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from './componentes/Home';
import { Layout } from './componentes/Layout';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/" /* creamos nuestro path root o raiz */,
    element: <Layout />, //* tendra el elemento a renderizar que sera Layout (es proporcionar una estructura común para los componentes de la aplicación y definir elementos visuales o funcionales que se repiten en todas o varias partes de la interfaz. )
    children: [
      {
        index: true, //* esta es la pagina que se va a mostrar como raiz
        element: <Home /> //* componente que se va a mostrar
      }
    ]
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);