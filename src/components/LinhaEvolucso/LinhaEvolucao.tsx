import type { ReactNode } from "react";

interface LinhaEvolucaoProps {
    nome: string;
    imagem: ReactNode;
    subtitulo: string;
    descricao: string;
}

export default function LinhaEvolucao({
    nome,
    imagem,
    subtitulo,
    descricao,
}: LinhaEvolucaoProps) {
    return (
        <div className="flex min-h-[460px] flex-col items-center rounded-[15px] bg-[var(--cor-branco)] p-[1.2rem] shadow-[0_3px_10px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px] hover:shadow-[2px_5px_12px_var(--cor-sombra)] max-[1200px]:min-h-[430px] max-[768px]:min-h-[400px] max-[480px]:min-h-[350px] max-[480px]:p-[1rem]">
            <span className="mb-[0.5rem] rounded-[10px] px-[0.8rem] py-[0.3rem] text-[0.95rem] font-[700] text-[var(--cor-titulo01)]">
                {nome}
            </span>

            <div className="flex h-[120px] w-full items-center justify-center">
                {imagem}
            </div>

            <h3 className="mt-[0.5rem] text-center text-[1.25rem] font-[700] leading-[1.3] text-[var(--cor-botao02)] max-[480px]:text-[1.15rem]">
                {subtitulo}
            </h3>

            <p className="mt-[0.7rem] text-[1rem] leading-[1.5] text-[var(--cor-subtitulo01)] max-[480px]:text-[0.95rem]">
                {descricao}
            </p>
        </div>
    );
}