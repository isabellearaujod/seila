import type { ReactNode } from "react";

interface CardMissao {
  titulo: string;
  subtitulo?: string;
  nivel: "Fácil" | "Médio";
  pontos: string;
  imagem?: ReactNode;
  iconePremio?: ReactNode;
  classeStatus?: string;
  children?: ReactNode;
}

export default function Card({
  titulo,
  subtitulo,
  nivel,
  pontos,
  imagem,
  iconePremio,
  classeStatus = "",
  children,
}: CardMissao) {
  const classePorNivel = {
    Fácil: "easy",
    Médio: "medium",
    Difícil: "hard",
  };

  return (
    <div className={`missao-card ${classeStatus}`}>
      <div className="missao-card-top">
        <div className="missao-card-icon">{imagem}</div>
        <div className="missao-card-body">
          <h4>{titulo}</h4>
          {subtitulo && <p>{subtitulo}</p>}
          <span className={`tag ${classePorNivel[nivel]}`}>{nivel}</span>
        </div>
      </div>

      <div className="missao-card-bottom">
        <div className="missao-card-premio">
          {iconePremio}
          {pontos}
        </div>
        <div className="missao-card-check">
            <i className="missao-icon"></i>
          </div>
      </div>
      {children}
    </div>
  );
}
