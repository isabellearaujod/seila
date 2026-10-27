import { useEffect } from "react";
import oliAcenando from "../../img/avatar-oli-acenando.png";
import Cta from "../../components/Cta/Cta";
import Botao from "../../../src/components/Botao/Botao";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre - DevMode";
  }, []);

  return (
    <main className="bg-[var(--cor-background)]">
      <section className="flex min-h-[70vh] items-center justify-between gap-[40px] px-[5rem] py-[60px] max-[992px]:px-[4rem] max-[768px]:flex-col max-[768px]:text-center max-[768px]:px-[2.5rem] max-[480px]:px-[1.5rem]">
        <div className="max-w-[600px]">
          <h1 className="mb-[20px] text-[52px] font-[600] text-[var(--cor-titulo01)] max-[992px]:text-[44px] max-[768px]:text-[36px] max-[480px]:text-[28px]">
            Projeto <span className="text-[var(--cor-cor01)]">Oli</span>
          </h1>
          <p className="mb-[25px] text-[18px] leading-[1.8] text-[var(--cor-cor03)] max-[768px]:text-[15px] max-[480px]:text-[14px]">
            Uma plataforma inteligente criada para tornar experiências digitais
            mais humanas, acessíveis e intuitivas através da Inteligência
            Artificial.
          </p>
          <div className="flex gap-[20px] max-[768px]:justify-center max-[480px]:flex-col max-[480px]:items-center">
            <Botao texto="Conhecer Projeto" destino="/evolucaooli" />
            <a
              href="#tecnologias"
              className="inline-block cursor-pointer rounded-[12px] border-2 border-[var(--cor-cor01)] px-[26px] py-[14px] text-[18px] font-[600] text-[var(--cor-cor01)] transition duration-300 hover:-translate-y-[2px] hover:bg-[var(--cor-cor01)] hover:text-[var(--cor-branco)] max-[480px]:px-[20px] max-[480px]:py-[12px] max-[480px]:text-[15px]"
            >
              Tecnologias
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={oliAcenando}
            alt="Avatar virtual do assistente Oli"
            className="w-[320px] max-[768px]:w-[240px] max-[480px]:w-[200px]"
          />
        </div>
      </section>

      <section className="px-[5rem] py-[70px] max-[768px]:px-[2.5rem] max-[480px]:px-[1.5rem]">
        <div className="mb-[35px] text-center">
          <h2 className="mb-[12px] text-[34px] text-[var(--cor-preto)] max-[480px]:text-[26px]">
            Contexto do Projeto
          </h2>
          <p className="mx-auto max-w-[700px] text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
            Muitas plataformas digitais ainda apresentam interfaces complexas,
            frias e difíceis de utilizar. O projeto Oli busca reduzir essa
            distância entre pessoas e tecnologia, utilizando Inteligência
            Artificial e interações dinâmicas para criar experiências mais
            simples, acessíveis e acolhedoras.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[20px] max-[992px]:gap-[16px] max-[768px]:flex-col max-[768px]:items-center">
          <div className="w-[300px] rounded-[20px] bg-[var(--cor-branco)] p-[25px] shadow-[0_3px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] max-[992px]:w-[240px] max-[768px]:w-full max-[768px]:max-w-[320px]">
            <h3 className="mb-[15px] text-[22px] text-[var(--cor-cor01)]">
              Interfaces Complexas
            </h3>
            <p className="leading-[1.7] text-[var(--cor-cor03)]">
              Usuários encontram dificuldades para navegar em plataformas
              digitais.
            </p>
          </div>

          <div className="w-[300px] rounded-[20px] bg-[var(--cor-branco)] p-[25px] shadow-[0_3px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] max-[992px]:w-[240px] max-[768px]:w-full max-[768px]:max-w-[320px]">
            <h3 className="mb-[15px] text-[22px] text-[var(--cor-cor01)]">
              Experiência Fria
            </h3>
            <p className="leading-[1.7] text-[var(--cor-cor03)]">
              A falta de interação personalizada pode tornar a experiência
              cansativa.
            </p>
          </div>

          <div className="w-[300px] rounded-[20px] bg-[var(--cor-branco)] p-[25px] shadow-[0_3px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] max-[992px]:w-[240px] max-[768px]:w-full max-[768px]:max-w-[320px]">
            <h3 className="mb-[15px] text-[22px] text-[var(--cor-cor01)]">
              Acessibilidade
            </h3>
            <p className="leading-[1.7] text-[var(--cor-cor03)]">
              Muitos sistemas ainda não oferecem experiências inclusivas.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[5rem] py-[70px] max-[768px]:px-[2.5rem] max-[480px]:px-[1.5rem]">
        <div className="mb-[35px] text-center">
          <h2 className="mb-[12px] text-[34px] text-[var(--cor-preto)] max-[480px]:text-[26px]">
            Solução Proposta
          </h2>
          <p className="mx-auto max-w-[700px] text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
            O Oli atua como um assistente virtual inteligente integrado à
            plataforma, oferecendo suporte em tempo real de forma leve e
            amigável.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[20px] max-[992px]:gap-[16px] max-[768px]:flex-col max-[768px]:items-center">
          <div className="w-[300px] rounded-[20px] bg-[var(--cor-branco)] p-[25px] shadow-[0_3px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] max-[992px]:w-[240px] max-[768px]:w-full max-[768px]:max-w-[320px]">
            <h3 className="mb-[15px] text-[22px] text-[var(--cor-cor01)]">
              Suporte Inteligente
            </h3>
            <p className="leading-[1.7] text-[var(--cor-cor03)]">
              O Oli auxilia os usuários de forma rápida e acessível.
            </p>
          </div>

          <div className="w-[300px] rounded-[20px] bg-[var(--cor-branco)] p-[25px] shadow-[0_3px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] max-[992px]:w-[240px] max-[768px]:w-full max-[768px]:max-w-[320px]">
            <h3 className="mb-[15px] text-[22px] text-[var(--cor-cor01)]">
              Sugestões Personalizadas
            </h3>
            <p className="leading-[1.7] text-[var(--cor-cor03)]">
              O sistema oferece recomendações conforme o comportamento do
              usuário.
            </p>
          </div>

          <div className="w-[300px] rounded-[20px] bg-[var(--cor-branco)] p-[25px] shadow-[0_3px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[8px] max-[992px]:w-[240px] max-[768px]:w-full max-[768px]:max-w-[320px]">
            <h3 className="mb-[15px] text-[22px] text-[var(--cor-cor01)]">
              Experiência Interativa
            </h3>
            <p className="leading-[1.7] text-[var(--cor-cor03)]">
              As interações tornam a navegação mais leve e intuitiva.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[5rem] py-[70px] max-[768px]:px-[2.5rem] max-[480px]:px-[1.5rem]">
        <div className="mb-[35px] text-center">
          <h2 className="mb-[12px] text-[34px] text-[var(--cor-preto)] max-[480px]:text-[26px]">
            Roadmap do Projeto
          </h2>
          <p className="mx-auto max-w-[700px] text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
            Principais etapas do desenvolvimento do Oli.
          </p>
        </div>

        <div className="mx-auto max-w-[900px] space-y-[20px]">
          <div className="rounded-[18px] bg-[var(--cor-branco)] p-[22px] shadow-[0_5px_20px_var(--cor-sombra)]">
            <h3 className="mb-[10px] text-[22px] text-[var(--cor-cor01)]">
              1. Pesquisa e Análise
            </h3>
            <p className="text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
              Análise de plataformas digitais e identificação de problemas
              relacionados à navegação, interação e acessibilidade.
            </p>
          </div>

          <div className="rounded-[18px] bg-[var(--cor-branco)] p-[22px] shadow-[0_5px_20px_var(--cor-sombra)]">
            <h3 className="mb-[10px] text-[22px] text-[var(--cor-cor01)]">
              2. Ideação do Projeto
            </h3>
            <p className="text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
              Criação da proposta do Oli como assistente virtual inteligente.
            </p>
          </div>

          <div className="rounded-[18px] bg-[var(--cor-branco)] p-[22px] shadow-[0_5px_20px_var(--cor-sombra)]">
            <h3 className="mb-[10px] text-[22px] text-[var(--cor-cor01)]">
              3. Planejamento e Design
            </h3>
            <p className="text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
              Definição da identidade visual, estrutura da interface,
              responsividade e acessibilidade.
            </p>
          </div>

          <div className="rounded-[18px] bg-[var(--cor-branco)] p-[22px] shadow-[0_5px_20px_var(--cor-sombra)]">
            <h3 className="mb-[10px] text-[22px] text-[var(--cor-cor01)]">
              4. Desenvolvimento da Plataforma
            </h3>
            <p className="text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
              Desenvolvimento da plataforma e implementação das principais
              funcionalidades do projeto.
            </p>
          </div>

          <div className="rounded-[18px] bg-[var(--cor-branco)] p-[22px] shadow-[0_5px_20px_var(--cor-sombra)]">
            <h3 className="mb-[10px] text-[22px] text-[var(--cor-cor01)]">
              5. Integração de Inteligência Artificial
            </h3>
            <p className="text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
              Integração de recursos de Inteligência Artificial para criar
              interações mais inteligentes e personalizadas.
            </p>
          </div>

          <div className="rounded-[18px] bg-[var(--cor-branco)] p-[22px] shadow-[0_5px_20px_var(--cor-sombra)]">
            <h3 className="mb-[10px] text-[22px] text-[var(--cor-cor01)]">
              6. Resultado Final
            </h3>
            <p className="text-[16px] leading-[1.7] text-[var(--cor-cor03)]">
              Uma proposta de experiência digital mais intuitiva, acessível e
              humanizada.
            </p>
          </div>
        </div>
      </section>

      <section
        id="tecnologias"
        className="px-[5rem] py-[70px] max-[768px]:px-[2.5rem] max-[480px]:px-[1.5rem]"
      >
        <div className="mb-[35px] text-center">
          <h2 className="mb-[12px] text-[34px] text-[var(--cor-preto)] max-[480px]:text-[26px]">
            Tecnologias
          </h2>
          <p className="text-[16px] text-[var(--cor-cor03)]">
            Tecnologias utilizadas e estudadas durante o desenvolvimento do
            projeto.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[20px]">
          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">⚛️</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              React
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🔷</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              TypeScript
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🎨</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Tailwind CSS
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🧭</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              React Router
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">⚡</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Vite
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">📝</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              React Hook Form
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🌐</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              HTML5
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🎨</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              CSS3
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🟨</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              JavaScript
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">☕</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Java
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🐍</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Python
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🗄️</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              MySQL e SQL
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🤖</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              APIs de IA
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🧠</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Machine Learning
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">📱</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Mobile First
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">♿</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Acessibilidade
            </p>
          </div>

          <div className="rounded-[20px] bg-[var(--cor-branco)] p-[18px] text-center shadow-[0_5px_20px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[5px]">
            <div className="text-[30px]">🎮</div>
            <p className="mt-[12px] text-[15px] text-[var(--cor-cor01)]">
              Gamificação
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[var(--cor-background)] py-[4rem]">
        <Cta
          titulo="Mais do que tecnologia"
          texto="Nosso projeto une tecnologia, inteligência artificial e sustentabilidade para criar uma experiência interativa e educativa."
          textoBotao="Acessar Protótipo"
          destino="/evolucaousuario"
        />
      </div>
    </main>
  );
}
