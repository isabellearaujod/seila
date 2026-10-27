import { PiPlantFill, PiLeafFill, PiTreeFill } from "react-icons/pi";
import { FaLock, FaCheck } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { Link } from "react-router";
import { useEffect } from "react";
import oliNivel4 from "../../img/oli-card-4.png";
import OliHero from "../../components/OliHero/OliHero";

export default function EvolucaoUsuario() {
  useEffect(() => {
    document.title = "Evolução Usuário - Protótipo";
  }, []);

  return (
    <main className="min-h-screen w-full bg-[var(--cor-background)]">
      <section className="bg-[image:var(--cor-bck-conteudo)] px-[2rem] py-[2.5rem] text-center text-[var(--cor-branco)] max-[480px]:px-[1.5rem] max-[480px]:py-[2rem]">
        <nav className="mx-auto mb-[1.5rem] flex max-w-[1200px] items-center justify-center gap-[0.6rem] text-[0.9rem] max-[480px]:flex-wrap max-[480px]:text-[0.8rem]">
          <Link
            to="/missao"
            className="cursor-pointer transition duration-300 hover:underline"
          >
            Missões
          </Link>

          <span>&gt;</span>

          <Link
            to="/evolucaooli"
            className="cursor-pointer transition duration-300 hover:underline"
          >
            Evolução do Oli
          </Link>
        </nav>

        <h1 className="mb-[0.7rem] text-[2.5rem] font-[700] max-[768px]:text-[2.2rem] max-[480px]:text-[2rem]">
          Evolução do Oli
        </h1>

        <p className="mx-auto max-w-[600px] text-[1.2rem] max-[480px]:text-[1rem]">
          Veja como o Oli cresce a cada gota que você conquista
        </p>
      </section>

      <section className="px-[2rem] py-[3rem] max-[480px]:px-[1.5rem] max-[480px]:py-[2rem]">
        <OliHero
          nivel="Nível 4 de 8"
          fase="Estágio atual: Arbusto"
          progressoLabel="12.450 / 16.000"
          legendaFaltante="Faltam 3.550 gotas para virar Árvore"
          avatar={
            <img
              src={oliNivel4}
              alt="Oli no Nível 4"
              className="w-[140px] max-w-full"
            />
          }
          iconeEstagio={<PiLeafFill />}
          iconeProgresso={<FaDroplet />}
        />
      </section>

      <section className="px-[2rem] pb-[4rem] max-[480px]:px-[1.5rem] max-[480px]:pb-[2.5rem]">
        <div className="mx-auto max-w-[1200px] rounded-[20px] bg-[var(--cor-branco)] p-[2rem] shadow-[2px_2px_8px_var(--cor-sombra)] max-[480px]:p-[1.5rem]">
          <div className="mb-[2rem] flex items-end justify-between gap-[2rem] max-[768px]:flex-col max-[768px]:items-start">
            <div>
              <h2 className="mb-[0.6rem] text-[1.8rem] font-[700] text-[var(--cor-titulo01)] max-[480px]:text-[1.5rem]">
                Trilha de evolução
              </h2>

              <p className="max-w-[650px] text-[1rem] leading-[1.6] text-[var(--cor-subtitulo01)] max-[480px]:text-[0.9rem]">
                Cada estágio é desbloqueado com o total de gotas acumuladas na
                sua carteira.
              </p>
            </div>

            <span className="rounded-[8px] bg-[var(--cor-cor05)] px-[0.7rem] py-[0.4rem] text-[0.8rem] font-[500] text-[var(--cor-cor07)]">
              8 estágios até o nível máximo
            </span>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <article className="flex items-center gap-[1rem] rounded-[15px] border border-[var(--cor-linha)] bg-[var(--cor-background)] p-[1rem] max-[480px]:flex-wrap">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[12px] bg-[var(--cor-cor05)] text-[1.3rem] text-[var(--cor-cor07)]">
                <PiPlantFill />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-[1rem] font-[700] text-[var(--cor-titulo01)]">
                  Semente
                </h3>

                <p className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
                  Nível 1 · 0 gotas
                </p>
              </div>

              <span className="flex items-center gap-[0.3rem] text-[0.8rem] font-[600] text-[var(--cor-cor07)]">
                <FaCheck />
                Concluído
              </span>
            </article>

            <article className="flex items-center gap-[1rem] rounded-[15px] border border-[var(--cor-linha)] bg-[var(--cor-background)] p-[1rem] max-[480px]:flex-wrap">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[12px] bg-[var(--cor-cor05)] text-[1.3rem] text-[var(--cor-cor07)]">
                <PiLeafFill />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-[1rem] font-[700] text-[var(--cor-titulo01)]">
                  Broto
                </h3>

                <p className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
                  Nível 2 · 500 gotas
                </p>
              </div>

              <span className="flex items-center gap-[0.3rem] text-[0.8rem] font-[600] text-[var(--cor-cor07)]">
                <FaCheck />
                Concluído
              </span>
            </article>

            <article className="flex items-center gap-[1rem] rounded-[15px] border border-[var(--cor-linha)] bg-[var(--cor-background)] p-[1rem] max-[480px]:flex-wrap">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[12px] bg-[var(--cor-cor05)] text-[1.3rem] text-[var(--cor-cor07)]">
                <PiLeafFill />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-[1rem] font-[700] text-[var(--cor-titulo01)]">
                  Muda
                </h3>

                <p className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
                  Nível 3 · 2.000 gotas
                </p>
              </div>

              <span className="flex items-center gap-[0.3rem] text-[0.8rem] font-[600] text-[var(--cor-cor07)]">
                <FaCheck />
                Concluído
              </span>
            </article>

            <article className="flex items-center gap-[1rem] rounded-[15px] border-2 border-[var(--cor-cor01)] bg-[var(--cor-background)] p-[1rem] shadow-[1px_1px_5px_var(--cor-cor04)] max-[480px]:flex-wrap">
              <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-[var(--cor-cor05)]">
                <img
                  src={oliNivel4}
                  alt="Oli no Nível 4"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-[1rem] font-[700] text-[var(--cor-titulo01)]">
                  Arbusto
                </h3>

                <p className="flex items-center gap-[0.3rem] text-[0.9rem] text-[var(--cor-subtitulo01)]">
                  <FaDroplet />
                  Nível 4 · 5.000 gotas
                </p>

                <div className="mt-[0.7rem] h-[8px] w-full overflow-hidden rounded-[8px] bg-[var(--cor-linha)]">
                  <div className="h-full w-[12rem] rounded-[8px] bg-[image:var(--cor-cor02)]"></div>
                </div>
              </div>

              <span className="rounded-[8px] bg-[var(--cor-cor05)] px-[0.5rem] py-[0.4rem] text-[0.8rem] font-[600] text-[var(--cor-cor07)]">
                Você está aqui
              </span>
            </article>

            <article className="flex items-center gap-[1rem] rounded-[15px] border border-[var(--cor-linha)] bg-[var(--cor-background)] p-[1rem] max-[480px]:flex-wrap">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[12px] bg-[var(--cor-linha)] text-[1.3rem] text-[var(--cor-cor03)]">
                <PiTreeFill />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="text-[1rem] font-[700] text-[var(--cor-titulo01)]">
                  Árvore
                </h3>

                <p className="text-[0.9rem] text-[var(--cor-subtitulo01)]">
                  Nível 5 · 8.000 gotas
                </p>
              </div>

              <div className="text-right">
                <span className="flex items-center justify-end gap-[0.3rem] text-[0.8rem] font-[600] text-[var(--cor-cor03)]">
                  <FaLock />
                  Bloqueado
                </span>

                <p className="mt-[0.3rem] text-[0.8rem] text-[var(--cor-subtitulo01)]">
                  Faltam 3.000 gotas
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
