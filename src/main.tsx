import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./base.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";

import Home from "./pages/Home/index.tsx";
import Integrantes from "./pages/Integrantes/index.tsx";
import Sobre from "./pages/Sobre/index.tsx";
import Faq from "./pages/Faq/index.tsx";
import EvolucaoOli from "./pages/EvolucaoOli/index.tsx";
import Error from "./pages/Error/index.tsx";
import Contato from "./pages/Contato/index.tsx";
import EvolucaoUsuario from "./pages/EvolucaoUsuario/index.tsx";
import Missao from "./pages/Missao/index.tsx";
import Login from "./pages/Login/index.tsx";
import Cadastro from "./pages/Cadastro/index.tsx";

// cria todas as rotas
const router = createBrowserRouter([

  // fica fora do App tsx, não aparece cabeçalho, rodapé ou chatbot
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },

    // tmb fica fora do App
  {
    path: "/cadastro",
    element: <Cadastro />,
    errorElement: <Error />,
  },

  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    // tds essas páginas ficam dentro do App tsx
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/faq", element: <Faq /> },
      { path: "/evolucaooli", element: <EvolucaoOli /> },
      { path: "/evolucaousuario", element: <EvolucaoUsuario /> },
      { path: "/missao", element: <Missao /> },
      { path: "/contato", element: <Contato /> },
      { path: "/missao/", element: <Missao /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);