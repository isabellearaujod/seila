import { useEffect } from "react";
import avatarOliEvolucao from "../../img/avatar-oli-evolucao.png";
import backgroundEvolucao from "../../img/pagina-evolucao.png";
import oliCard from "../../img/oli-card-0.png";
import oliCard1 from "../../img/oli-card-1.png";
import oliCard2 from "../../img/oli-card-2.png";
import oliCard3 from "../../img/oli-card-3.png";
import oliCard4 from "../../img/oli-card-4.png";
import Cta from "../../components/Cta/Cta";

export default function EvolucaoOli() {
  useEffect(() => {
    document.title = "Evolução Oli - DevMode";
  }, []);

  return (
    <main className="bg-[var(--cor-background)] pb-[100px]">
      <section
        className="relative flex min-h-[100vh] items-center justify-between gap-[20px] overflow-hidden bg-cover bg-center bg-no-repeat px-[5rem] shadow-[0_-10px_35px_var(--cor-sombra)] max-[992px]:px-[4rem] max-[768px]:flex-col max-[768px]:justify-center max-[768px]:gap-[20px] max-[768px]:px-[3rem] max-[480px]:gap-[15px] max-[480px]:px-[1.5rem]"
        style={{ backgroundImage: `url(${backgroundEvolucao})` }}
      >
        <div className="order-2 flex items-center justify-center max-[480px]:order-1">
          <img
            src={avatarOliEvolucao}
            className="w-[340px] max-[992px]:w-[280px] max-[768px]:w-[240px] max-[480px]:w-[200px]"
            alt="Oli acenando"
          />
        </div>

        <div className="order-1 flex w-full max-w-[600px] flex-col items-start justify-center gap-[20px] max-[480px]:order-2 max-[480px]:items-center max-[480px]:text-center max-[480px]:w-full max-[480px]:max-w-full">
          <h1
            aria-label="Título principal da evolução do avatar Oli"
            className="text-[60px] font-[800] leading-[1.1] text-[var(--cor-preto)] max-[768px]:text-[40px] max-[480px]:text-[40px]"
          >
            Oli, seu avatar
            <span className="mt-[5px] block bg-[image:var(--cor-cabecalho)] bg-clip-text text-[65px] font-[800] text-transparent max-[768px]:text-[40px] max-[480px]:text-[40px]">
              Ganhando vida
            </span>
          </h1>

          <p
            aria-label="Descrição sobre a evolução do Oli baseada em interações do usuário"
            className="max-w-[500px] text-[16px] leading-[1.5] text-[var(--cor-titulo01)] max-[768px]:text-[13px] max-[480px]:text-[13px]"
          >
            Para deixar de ser apenas um desenho e se tornar um companheiro
            digital, o Oli evolui com base nas interações armazenadas em nosso
            banco de dados Java e SQL.
          </p>
        </div>
      </section>

      <section
        className="bg-[var(--cor-background)] px-[3rem] py-[3rem] max-[480px]:px-[1.5rem]"
        id="estagios"
      >
        <div className="px-[2rem] pb-[2rem] pt-[3rem] text-center max-[480px]:px-[1rem]">
          <h2
            aria-label="Linha de evolução do avatar Oli"
            className="mb-[1rem] text-[30px] font-[600] text-[var(--cor-preto)] max-[480px]:text-[26px]"
          >
            Linha de evolução do Oli
          </h2>

          <p
            aria-label="Descrição da jornada de evolução do Oli"
            className="mx-auto my-[2rem] max-w-[600px] text-[16px] leading-[1.7] text-[var(--cor-subtitulo01)]"
          >
            Conforme o banco de dados detecta o acúmulo de "Gotas", a interface
            do aplicativo atualiza o estágio de maturação do Oli. Veja a jornada
            dele abaixo:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[2rem] p-[1rem] min-[481px]:grid-cols-2 min-[993px]:grid-cols-3 min-[1200px]:grid-cols-5">
          <article className="flex flex-col items-center rounded-[12px] bg-[var(--cor-branco)] p-[1.5rem] shadow-[0_4px_12px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] hover:shadow-[0_4px_10px_var(--cor-sombra)]">
            <span className="mx-auto inline-block rounded-[12px] px-[1rem] py-[0.5rem] text-[1.2rem] font-[700] text-[var(--cor-titulo01)]">
              Nível 01
            </span>

            <div className="my-[1rem] flex w-full items-center justify-center">
              <img
                src={oliCard}
                className="h-[140px] max-w-[80px] rounded-[12px] p-[0.5rem]"
                alt="Card Evolução Oli nível 01"
              />
            </div>

            <h3 className="my-[0.5rem] text-center text-[1.5rem] font-[700] text-[var(--cor-botao02)]">
              Fase de descoberta
            </h3>

            <p className="text-[1.2rem] leading-[1.6] text-[var(--cor-subtitulo01)]">
              Oli em sua fase inicial, aguardando as primeiras ações ecológicas
              do usuário.
            </p>
          </article>

          <article className="flex flex-col items-center rounded-[12px] bg-[var(--cor-branco)] p-[1.5rem] shadow-[0_4px_12px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] hover:shadow-[0_4px_10px_var(--cor-sombra)]">
            <span className="mx-auto inline-block rounded-[12px] px-[1rem] py-[0.5rem] text-[1.2rem] font-[700] text-[var(--cor-titulo01)]">
              Nível 02
            </span>

            <div className="my-[1rem] flex w-full items-center justify-center">
              <img
                src={oliCard1}
                className="h-[140px] max-w-[80px] rounded-[12px] p-[0.5rem]"
                alt="Card Evolução Oli nível 02"
              />
            </div>

            <h3 className="my-[0.5rem] text-center text-[1.5rem] font-[700] text-[var(--cor-botao02)]">
              Primeiros Passos
            </h3>

            <p className="text-[1.2rem] leading-[1.6] text-[var(--cor-subtitulo01)]">
              Integração inicial com as metas. O visual começa a mudar e a
              evolução para uma próxima evolução de planta é possível.
            </p>
          </article>

          <article className="flex flex-col items-center rounded-[12px] bg-[var(--cor-branco)] p-[1.5rem] shadow-[0_4px_12px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] hover:shadow-[0_4px_10px_var(--cor-sombra)]">
            <span className="mx-auto inline-block rounded-[12px] px-[1rem] py-[0.5rem] text-[1.2rem] font-[700] text-[var(--cor-titulo01)]">
              Nível 03
            </span>

            <div className="my-[1rem] flex w-full items-center justify-center">
              <img
                src={oliCard2}
                className="h-[140px] max-w-[80px] rounded-[12px] p-[0.5rem]"
                alt="Card Evolução Oli nível 03"
              />
            </div>

            <h3 className="my-[0.5rem] text-center text-[1.5rem] font-[700] text-[var(--cor-botao02)]">
              Consciente
            </h3>

            <p className="text-[1.2rem] leading-[1.6] text-[var(--cor-subtitulo01)]">
              Oli ganha novas expressões baseadas nas escolhas e missões diárias
              salvas.
            </p>
          </article>

          <article className="flex flex-col items-center rounded-[12px] bg-[var(--cor-branco)] p-[1.5rem] shadow-[0_4px_12px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] hover:shadow-[0_4px_10px_var(--cor-sombra)]">
            <span className="mx-auto inline-block rounded-[12px] px-[1rem] py-[0.5rem] text-[1.2rem] font-[700] text-[var(--cor-titulo01)]">
              Nível 04
            </span>

            <div className="my-[1rem] flex w-full items-center justify-center">
              <img
                src={oliCard3}
                className="h-[140px] max-w-[80px] rounded-[12px] p-[0.5rem]"
                alt="Card Evolução Oli nível 04"
              />
            </div>

            <h3 className="my-[0.5rem] text-center text-[1.5rem] font-[700] text-[var(--cor-botao02)]">
              Protetor Ambiental
            </h3>

            <p className="text-[1.2rem] leading-[1.6] text-[var(--cor-subtitulo01)]">
              O design se expande, refletindo maior engajamento e liberação de
              funções de gamificação.
            </p>
          </article>

          <article className="flex flex-col items-center rounded-[12px] bg-[var(--cor-branco)] p-[1.5rem] shadow-[0_4px_12px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] hover:shadow-[0_4px_10px_var(--cor-sombra)]">
            <span className="mx-auto inline-block rounded-[12px] px-[1rem] py-[0.5rem] text-[1.2rem] font-[700] text-[var(--cor-titulo01)]">
              Nível 05
            </span>

            <div className="my-[1rem] flex w-full items-center justify-center">
              <img
                src={oliCard4}
                className="h-[140px] max-w-[80px] rounded-[12px] p-[0.5rem]"
                alt="Card Evolução Oli nível 05"
              />
            </div>

            <h3 className="my-[0.5rem] text-center text-[1.5rem] font-[700] text-[var(--cor-botao02)]">
              Guardião Sustentável
            </h3>

            <p className="text-[1.2rem] leading-[1.6] text-[var(--cor-subtitulo01)]">
              A evolução máxima visual do Oli dentro do ecossistema SoulUp X
              DevMode.
            </p>
          </article>
        </div>
      </section>

      <section
        className="bg-[var(--cor-background)] px-[2rem] py-[3rem]"
        id="dados"
      >
        <div className="px-[2rem] pb-[2rem] pt-[3rem] text-center max-[480px]:px-[1rem]">
          <h2
            aria-label="Como o sistema processa a evolução do Oli"
            className="mb-[1rem] text-[30px] font-[600] text-[var(--cor-preto)] max-[480px]:text-[25px]"
          >
            Como a Lógica de Dados Processa essa Evolução
          </h2>

          <p
            aria-label="Descrição sobre o funcionamento interno da evolução do avatar"
            className="mx-auto my-[2rem] max-w-[600px] text-[16px] leading-[1.7] text-[var(--cor-subtitulo01)]"
          >
            Por trás dessas interfaces, existe um sistema robusto operando em
            tempo real:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[2rem] px-[2rem] min-[481px]:grid-cols-2 min-[993px]:grid-cols-3 max-[480px]:px-[1rem]">
          <div className="flex min-h-[140px] flex-col justify-between rounded-[15px] border border-[var(--cor-sombra)] bg-[var(--cor-branco)] p-[1.5rem]">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-[18px] bg-[image:var(--cor-bck-conteudo)] text-[var(--cor-branco)] shadow-[2px_2px_8px_var(--cor-sombra)]">
              1
            </div>

            <h3 className="pl-[4px] text-[16px] font-[700] text-[var(--cor-preto)]">
              Entrada de Atividade
            </h3>

            <p className="p-[0.5rem] text-left text-[14px] leading-[1.4] text-[var(--cor-subtitulo01)]">
              Ações ecológicas geram gatilhos de pontuação na aplicação.
            </p>
          </div>

          <div className="flex min-h-[140px] flex-col justify-between rounded-[15px] border border-[var(--cor-sombra)] bg-[var(--cor-branco)] p-[1.5rem]">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-[18px] bg-[image:var(--cor-bck-conteudo)] text-[var(--cor-branco)] shadow-[2px_2px_8px_var(--cor-sombra)]">
              2
            </div>

            <h3 className="pl-[4px] text-[16px] font-[700] text-[var(--cor-preto)]">
              Objeto Java Atualizado
            </h3>

            <p className="p-[0.5rem] text-left text-[14px] leading-[1.4] text-[var(--cor-subtitulo01)]">
              As classes calculam se a pontuação atingiu a meta de transição de
              nível do Avatar.
            </p>
          </div>

          <div className="flex min-h-[140px] flex-col justify-between rounded-[15px] border border-[var(--cor-sombra)] bg-[var(--cor-branco)] p-[1.5rem]">
            <div className="flex h-[45px] w-[45px] items-center justify-center rounded-[18px] bg-[image:var(--cor-bck-conteudo)] text-[var(--cor-branco)] shadow-[2px_2px_8px_var(--cor-sombra)]">
              3
            </div>

            <h3 className="pl-[4px] text-[16px] font-[700] text-[var(--cor-preto)]">
              Persistência e Resposta
            </h3>

            <p className="p-[0.5rem] text-left text-[14px] leading-[1.4] text-[var(--cor-subtitulo01)]">
              O banco SQL salva o estado e devolve para o front-end qual imagem
              renderizar na tela.
            </p>
          </div>
        </div>
      </section>

      <Cta
        titulo="Temos mais evoluções do Oli esperando por você!"
        texto="Cada interação te aproxima de um ecossistema mais vivo, inteligente e conectado."
        textoBotao="Veja o Protótipo"
        destino="/missao"
      />
    </main>
  );
}
