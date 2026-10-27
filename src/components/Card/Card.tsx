import type { ReactNode } from "react";

interface CardProps {
  titulo: string;
  texto: string;
  descricao: string;
  icone?: ReactNode;
  children?: ReactNode;
}

export default function Card({
  titulo,
  texto,
  descricao,
  icone,
  children,
}: CardProps) {
  return (
    <article className="flex min-h-[250px] w-full flex-col rounded-[15px] border border-[var(--cor-sombra)] bg-[var(--cor-branco)] p-[1.2rem] shadow-[0_2px_5px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[3px] hover:shadow-[2px_4px_10px_var(--cor-sombra)] max-[768px]:min-h-[240px] max-[480px]:min-h-[230px] max-[480px]:p-[1rem]">
      <div className="mb-[0.7rem] flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[13px] bg-[image:var(--cor-bck-conteudo)] text-[var(--cor-branco)] shadow-[2px_2px_8px_var(--cor-sombra)] [&>svg]:h-[18px] [&>svg]:w-[18px]">
        {icone}
      </div>

      <h3 className="mb-[0.5rem] text-[1.2rem] font-[700] leading-[1.2] text-[var(--cor-preto)] max-[768px]:text-[1.15rem]">
        {titulo}
      </h3>

      <div>
        <p className="mb-[0.5rem] text-[0.9rem] leading-[1.35] text-[var(--cor-subtitulo01)]">
          {texto}
        </p>

        <p className="text-[0.9rem] leading-[1.35] text-[var(--cor-subtitulo01)]">
          {descricao}
        </p>
      </div>

      <div className="mt-auto pt-[0.8rem]">{children}</div>
    </article>
  );
}