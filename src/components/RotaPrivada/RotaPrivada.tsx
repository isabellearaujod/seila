import { Navigate } from "react-router";

interface RotaPrivadaProps {
  children: React.ReactNode;
}

export default function RotaPrivada({ children }: RotaPrivadaProps) {
  
  const usuarioId = localStorage.getItem("usuarioId");

  
  if (!usuarioId) {
    return <Navigate to="/login" replace />;
  }


  return children;
}