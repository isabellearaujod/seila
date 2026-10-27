import { PiPlantFill, PiDropFill } from "react-icons/pi";

interface CardAtividadesProps {
    missoes: number;
    gotas: number;
    co2: number;
    pontos: number;
    valorPix: number;
}

export default function CardAtividades({
    missoes,
    gotas,
    co2,
    pontos,
    valorPix,
}: CardAtividadesProps) {
    return (
        <section className="flex flex-col gap-[1.5rem]">
            <section className="rounded-[15px] bg-[var(--cor-branco)] p-[1.5rem] shadow-[2px_2px_8px_var(--cor-sombra)]">
                <h2 className="mb-[1.5rem] text-[1.5rem] font-[700] text-[var(--cor-titulo01)]">
                    Suas atividades
                </h2>

                <div className="mb-[1.2rem] flex items-center gap-[1rem]">
                    <PiPlantFill className="text-[1.8rem] text-[var(--cor-botao01)]" />

                    <div className="flex flex-col">
                        <strong className="text-[1.3rem] text-[var(--cor-texto)]">
                            {missoes}
                        </strong>

                        <span className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
                            Missões concluídas
                        </span>
                    </div>
                </div>

                <div className="mb-[1.2rem] flex items-center gap-[1rem]">
                    <PiDropFill className="text-[1.8rem] text-[var(--cor-botao01)]" />

                    <div className="flex flex-col">
                        <strong className="text-[1.3rem] text-[var(--cor-texto)]">
                            {gotas}
                        </strong>

                        <span className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
                            Gotas acumuladas
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-[1rem]">
                    <span className="text-[1.8rem]">🌐</span>

                    <div className="flex flex-col">
                        <strong className="text-[1.3rem] text-[var(--cor-texto)]">
                            {co2} kg
                        </strong>

                        <span className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
                            CO₂ evitado
                        </span>
                    </div>
                </div>
            </section>

            <section className="rounded-[15px] bg-[var(--cor-branco)] p-[1.5rem] text-center shadow-[2px_2px_8px_var(--cor-sombra)]">
                <div className="mb-[1.5rem]">
                    <h2 className="text-[1.5rem] font-[700] text-[var(--cor-titulo01)]">
                        Minha Carteira
                    </h2>
                </div>

                <div className="flex items-baseline justify-center gap-[0.5rem]">
                    <p className="bg-[image:var(--cor-cor02)] bg-clip-text text-[2rem] font-[700] text-transparent">
                        {pontos}
                    </p>

                    <span className="text-[1rem] text-[var(--cor-subtitulo01)]">
                        pontos
                    </span>
                </div>

                <p className="mt-[1.5rem] text-[0.8rem] text-[var(--cor-subtitulo01)]">
                    Total de pontos acumulados
                </p>

                <p className="mt-[0.5rem] text-[1rem] text-[var(--cor-texto)]">
                    <span className="font-[700] text-[var(--cor-botao01)]">
                        = R$ {valorPix.toFixed(2).replace(".", ",")}
                    </span>
                    {" "}
                    no PIX
                </p>
            </section>
        </section>
    );
}