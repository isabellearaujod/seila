import type { ReactNode } from "react";

interface CardOliHero {
  nivel: string;
  fase: string;
  progressoLabel: string;
  legendaFaltante: string;
  avatar: ReactNode;
  iconeEstagio?: ReactNode;
  iconeProgresso?: ReactNode;
}

export default function Card({
  nivel,
  fase,
  progressoLabel,
  legendaFaltante,
  avatar,
  iconeProgresso,
  iconeEstagio,
}: CardOliHero) {
  
  return (
    <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-[2rem] rounded-[20px] bg-[var(--cor-branco)] p-[2rem] shadow-[2px_2px_8px_var(--cor-sombra)] max-[768px]:gap-[1.5rem] max-[480px]:flex-col max-[480px]:p-[1.5rem]">
      <div className="flex flex-1 flex-col">
        <span className="mb-[0.7rem] w-fit rounded-[8px] bg-[var(--cor-cor05)] px-[0.7rem] py-[0.4rem] text-[0.8rem] font-[600] text-[var(--cor-cor07)]">
          {nivel}
        </span>

        <h2 className="mb-[0.5rem] text-[1.8rem] font-[700] text-[var(--cor-titulo01)]">
          Oli
        </h2>

        <div className="mb-[0.8rem] flex items-center gap-[0.4rem] text-[1rem] text-[var(--cor-cor07)]">
          {iconeEstagio}
          {fase}
        </div>

        <div className="mb-[0.7rem] flex items-center gap-[0.4rem] text-[1rem] text-[var(--cor-subtitulo01)]">
          {iconeProgresso}
          {progressoLabel}
          <span className="text-[0.9rem]">gotas</span>
        </div>

        <div className="mb-[0.7rem] h-[10px] w-full overflow-hidden rounded-[10px] bg-[var(--cor-linha)]">
          <div className="h-full w-[12rem] rounded-[10px] bg-[image:var(--cor-cor02)]"></div>
        </div>

        <div className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
          {legendaFaltante}
        </div>
      </div>

      <div className="flex w-[160px] items-center justify-center max-[768px]:w-[140px] max-[480px]:w-full">
        {avatar}
      </div>
    </div>
  );
}
