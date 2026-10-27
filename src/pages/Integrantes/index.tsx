import isabelleDantasDeAraujo from "../../img/isabelle-dantas-de-araujo.jpeg";
import yasminNunesDosSantos from "../../img/yasmin-nunes-dos-santos.jpeg";
import heloisaCostaPereira from "../../img/heloisa-costa-pereira.jpeg";
import CardIntegrante from "../../../src/components/CardIntegrante/CardIntegrante";
import { useEffect } from "react";

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes - DevMode";
  }, []);

  return (
    <main className="min-h-screen w-full flex-1 bg-[var(--cor-background)]">
      <section className="w-full px-[3%] py-[3%] max-[992px]:px-[5%] max-[992px]:py-[4%] max-[768px]:px-[5%] max-[768px]:py-[4%] max-[480px]:px-[1.5rem] max-[480px]:py-[2.5rem]">
        <h1 className="mb-[1rem] text-center text-[25px] font-[600] text-[var(--cor-preto)] max-[992px]:text-[22px] max-[768px]:text-[22px] max-[480px]:px-[5%] max-[480px]:text-[20px]">
          Equipe de Desenvolvimento
        </h1>
        <p className="mx-auto mb-[2rem] max-w-[900px] text-center text-[14px] leading-[1.2] text-[var(--cor-subtitulo01)] max-[992px]:px-[2%] max-[992px]:text-[14px] max-[768px]:text-[13px] max-[480px]:px-[3%] max-[480px]:text-[13px]">
          Conheça as integrantes que estão por trás do desenvolvimento do
          projeto DevMode X SoulUp.
        </p>

        <div className="grid grid-cols-1 gap-[2rem] min-[481px]:grid-cols-2 min-[481px]:gap-[1.2rem] min-[993px]:grid-cols-3 min-[993px]:gap-[1.5rem]">
          <CardIntegrante
            titulo="Heloisa Costa Pereira"
            info="RM: 572756 | Turma: 1TDSPY"
            descricao="Responsável pelo planejamento e implementação em Python."
            imagem={heloisaCostaPereira}
            github="https://github.com/helo0309"
            linkedin="https://www.linkedin.com/in/heloisa-costa-pereira-4a0810381"
          ></CardIntegrante>

          <CardIntegrante
            titulo="Isabelle Dantas de Araújo"
            info="RM: 570167 | Turma: 1TDSPY"
            descricao="Responsável pela estruturação do projeto e desenvolvimento front-end."
            imagem={isabelleDantasDeAraujo}
            github="https://github.com/isabellearaujod"
            linkedin="https://www.linkedin.com/in/isabelle-dantas-araujo/"
          ></CardIntegrante>

          <CardIntegrante
            titulo="Yasmin Nunes dos Santos"
            info="RM: 568618 | Turma: 1TDSPY"
            descricao="Responsável pelo desenvolvimento do banco de dados, Programação em Java e Inteligência Artificial."
            imagem={yasminNunesDosSantos}
            github="https://github.com/Yasmin5511"
            linkedin="https://www.linkedin.com/in/yasmin-nunes-727202186?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          ></CardIntegrante>
        </div>
      </section>
    </main>
  );
}
