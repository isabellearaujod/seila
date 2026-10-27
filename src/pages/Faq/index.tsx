import { useEffect, useState } from "react";
import Cta from "../../components/Cta/Cta";

export default function Faq() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  useEffect(() => {
    document.title = "FAQ - DevMode";
  }, []);

  function mostrarPergunta(numero: number) {
    if (perguntaAberta === numero) {
      setPerguntaAberta(null);
    } else {
      setPerguntaAberta(numero);
    }
  }

  return (
    <main
      className="w-full flex-1 bg-[var(--cor-background)] px-[10px] py-[70px] max-[992px]:py-[60px] max-[768px]:py-[50px] max-[480px]:px-[8px] max-[480px]:py-[35px]"
      aria-label="Página de perguntas frequentes do projeto"
    >
      <h1 className="mx-auto mb-[50px] w-full max-w-[800px] text-center text-[2.8rem] font-[700] leading-[1.3] tracking-[-1px] text-[var(--cor-preto)] max-[992px]:text-[2.6rem] max-[768px]:text-[2.3rem] max-[480px]:mb-[30px] max-[480px]:px-[5%] max-[480px]:text-[2rem]">
        Confira abaixo as perguntas e respostas mais comuns sobre o projeto
      </h1>

      <section
        className="mx-auto flex max-w-[900px] flex-col gap-[18px]"
        aria-label="Lista de perguntas frequentes organizadas por tema"
      >
        <h2
          className="cursor-pointer rounded-[14px] border border-[var(--cor-linha)] bg-[image:var(--cor-bck-conteudo)] px-[28px] py-[22px] text-[1.3rem] font-[600] text-[var(--cor-branco)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:text-[1.5rem] max-[768px]:text-[1.3rem] max-[480px]:px-[16px] max-[480px]:py-[14px] max-[480px]:text-[1.1rem]"
          onClick={() => mostrarPergunta(1)}
        >
          1. Qual é a função do avatar Oli?
        </h2>
        {perguntaAberta === 1 && (
          <p className="mx-auto mb-[8px] max-w-[600px] rounded-b-[14px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] px-[30px] pb-[25px] pt-[10px] text-center text-[1.1rem] text-[var(--cor-subtitulo01)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:max-w-[700px] max-[992px]:text-[1.3rem] max-[768px]:max-w-[80%] max-[768px]:text-[1.15rem] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:pt-[12px] max-[480px]:text-[1rem] max-[480px]:leading-[1.4]">
            O Oli atua como um assistente virtual inteligente, ajudando o
            usuário durante a navegação, oferecendo dicas, sugestões e suporte
            de forma interativa e amigável.
          </p>
        )}

        <h2
          className="cursor-pointer rounded-[14px] border border-[var(--cor-linha)] bg-[image:var(--cor-bck-conteudo)] px-[28px] py-[22px] text-[1.3rem] font-[600] text-[var(--cor-branco)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:text-[1.5rem] max-[768px]:text-[1.3rem] max-[480px]:px-[16px] max-[480px]:py-[14px] max-[480px]:text-[1.1rem]"
          onClick={() => mostrarPergunta(2)}
        >
          2. Como a Inteligência Artificial é utilizada no projeto?
        </h2>
        {perguntaAberta === 2 && (
          <p className="mx-auto mb-[8px] max-w-[600px] rounded-b-[14px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] px-[30px] pb-[25px] pt-[10px] text-center text-[1.1rem] text-[var(--cor-subtitulo01)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:max-w-[700px] max-[992px]:text-[1.3rem] max-[768px]:max-w-[80%] max-[768px]:text-[1.15rem] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:pt-[12px] max-[480px]:text-[1rem] max-[480px]:leading-[1.4]">
            A Inteligência Artificial permite que o avatar identifique padrões
            de comportamento do usuário para adaptar respostas, recomendações e
            interações conforme as necessidades de cada pessoa.
          </p>
        )}

        <h2
          className="cursor-pointer rounded-[14px] border border-[var(--cor-linha)] bg-[image:var(--cor-bck-conteudo)] px-[28px] py-[22px] text-[1.3rem] font-[600] text-[var(--cor-branco)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:text-[1.5rem] max-[768px]:text-[1.3rem] max-[480px]:px-[16px] max-[480px]:py-[14px] max-[480px]:text-[1.1rem]"
          onClick={() => mostrarPergunta(3)}
        >
          3. Quais benefícios o projeto oferece para os usuários?
        </h2>
        {perguntaAberta === 3 && (
          <p className="mx-auto mb-[8px] max-w-[600px] rounded-b-[14px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] px-[30px] pb-[25px] pt-[10px] text-center text-[1.1rem] text-[var(--cor-subtitulo01)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:max-w-[700px] max-[992px]:text-[1.3rem] max-[768px]:max-w-[80%] max-[768px]:text-[1.15rem] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:pt-[12px] max-[480px]:text-[1rem] max-[480px]:leading-[1.4]">
            O projeto melhora a experiência do usuário ao tornar a navegação
            mais simples, personalizada e envolvente, além de aumentar a
            acessibilidade e facilitar a interação com a plataforma.
          </p>
        )}

        <h2
          className="cursor-pointer rounded-[14px] border border-[var(--cor-linha)] bg-[image:var(--cor-bck-conteudo)] px-[28px] py-[22px] text-[1.3rem] font-[600] text-[var(--cor-branco)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:text-[1.5rem] max-[768px]:text-[1.3rem] max-[480px]:px-[16px] max-[480px]:py-[14px] max-[480px]:text-[1.1rem]"
          onClick={() => mostrarPergunta(4)}
        >
          4. Qual é o principal objetivo do projeto?
        </h2>
        {perguntaAberta === 4 && (
          <p className="mx-auto mb-[8px] max-w-[600px] rounded-b-[14px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] px-[30px] pb-[25px] pt-[10px] text-center text-[1.1rem] text-[var(--cor-subtitulo01)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:max-w-[700px] max-[992px]:text-[1.3rem] max-[768px]:max-w-[80%] max-[768px]:text-[1.15rem] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:pt-[12px] max-[480px]:text-[1rem] max-[480px]:leading-[1.4]">
            O principal objetivo é transformar a experiência digital em algo
            mais humano, inteligente e interativo por meio do avatar Oli, capaz
            de adaptar interações, auxiliar usuários e criar conexões mais
            naturais entre pessoas e tecnologia
          </p>
        )}

        <h2
          className="cursor-pointer rounded-[14px] border border-[var(--cor-linha)] bg-[image:var(--cor-bck-conteudo)] px-[28px] py-[22px] text-[1.3rem] font-[600] text-[var(--cor-branco)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:text-[1.5rem] max-[768px]:text-[1.3rem] max-[480px]:px-[16px] max-[480px]:py-[14px] max-[480px]:text-[1.1rem]"
          onClick={() => mostrarPergunta(5)}
        >
          5. A plataforma é gratuita?
        </h2>
        {perguntaAberta === 5 && (
          <p className="mx-auto mb-[8px] max-w-[600px] rounded-b-[14px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] px-[30px] pb-[25px] pt-[10px] text-center text-[1.1rem] text-[var(--cor-subtitulo01)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:max-w-[700px] max-[992px]:text-[1.3rem] max-[768px]:max-w-[80%] max-[768px]:text-[1.15rem] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:pt-[12px] max-[480px]:text-[1rem] max-[480px]:leading-[1.4]">
            Sim, a proposta é que o usuário participe gratuitamente e seja
            incentivado por recompensas.
          </p>
        )}

        <h2
          className="cursor-pointer rounded-[14px] border border-[var(--cor-linha)] bg-[image:var(--cor-bck-conteudo)] px-[28px] py-[22px] text-[1.3rem] font-[600] text-[var(--cor-branco)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:text-[1.5rem] max-[768px]:text-[1.3rem] max-[480px]:px-[16px] max-[480px]:py-[14px] max-[480px]:text-[1.1rem]"
          onClick={() => mostrarPergunta(6)}
        >
          6. O projeto busca incentivar a sustentabilidade?
        </h2>
        {perguntaAberta === 6 && (
          <p className="mx-auto mb-[8px] max-w-[600px] rounded-b-[14px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] px-[30px] pb-[25px] pt-[10px] text-center text-[1.1rem] text-[var(--cor-subtitulo01)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:max-w-[700px] max-[992px]:text-[1.3rem] max-[768px]:max-w-[80%] max-[768px]:text-[1.15rem] max-[480px]:px-[16px] max-[480px]:pb-[18px] max-[480px]:pt-[12px] max-[480px]:text-[1rem] max-[480px]:leading-[1.4]">
            Sim. A proposta do projeto relaciona tecnologia, interação e
            sustentabilidade, incentivando comportamentos mais conscientes por
            meio de atividades, dicas e elementos de gamificação.
          </p>
        )}
      </section>

      <Cta
        titulo="Ainda ficou com alguma dúvida?"
        texto="Entre em contato com a equipe DevMode e envie sua pergunta."
        textoBotao="Contato"
        destino="/contato"
      />
    </main>
  );
}
