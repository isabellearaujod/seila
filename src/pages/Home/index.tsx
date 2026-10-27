import { SlEnergy } from "react-icons/sl";
import { PiPlant, PiPlantLight, PiPlantFill } from "react-icons/pi";
import { FaEnvelope, FaFlagCheckered, FaQuestionCircle } from "react-icons/fa";
import { FaMoneyBillTransfer, FaUserAstronaut } from "react-icons/fa6";
import { useEffect } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import BotaoHome from "../../components/BotaoHome/BotaoHome";
import Card from "../../components/Card/Card";
import oliPrincipal from "../../../src/img/avatar-oli-principal.png";
import backgroundHome from "../../../src/img/pagina-inicial.png";

export default function Home() {
  useEffect(() => {
    document.title = "Home - DevMode";
  }, []);

  return (
    <main
      className="w-full flex-1"
      aria-label="Conteúdo principal de cada página"
    >
      <section
        className="relative flex min-h-[100vh] w-full items-center gap-[20px] overflow-hidden bg-cover bg-center bg-no-repeat px-[10%] shadow-[0_5px_20px_var(--cor-sombra)] max-[992px]:gap-[25px] max-[992px]:px-[6%] max-[768px]:gap-[20px] max-[768px]:px-[6%] max-[480px]:flex-col max-[480px]:justify-center max-[480px]:gap-[15px] max-[480px]:px-[5%] max-[480px]:py-[50px]"
        style={{ backgroundImage: `url(${backgroundHome})` }}
      >
        <div className="order-1 w-full max-w-[400px] max-[768px]:max-w-[55%] max-[480px]:max-w-full max-[480px]:text-center">
          <h1 className="mb-[20px] text-[60px] font-[800] leading-[1] text-[var(--cor-preto)] max-[992px]:text-[52px] max-[480px]:text-[40px]">
            O futuro sustentável começa com cada
            <span className="block bg-[image:var(--cor-bck-conteudo)] bg-clip-text text-[65px] font-[800] leading-[1] text-transparent max-[992px]:text-[56px] max-[480px]:text-[40px]">
              conexão
            </span>
          </h1>

          <p className="max-w-[350px] text-[14px] leading-[1.2] text-[var(--cor-titulo01)] max-[480px]:mx-auto max-[480px]:max-w-[90%] max-[480px]:text-[12px]">
            Cuidar do meio ambiente começa com atitudes simples. Com apoio da
            tecnologia, é possível reduzir impactos e contribuir para um futuro
            mais sustentável.
          </p>
        </div>

        <div className="absolute left-[75%] top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 max-[992px]:left-[74%] max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:order-2 max-[768px]:translate-x-0 max-[768px]:translate-y-0 max-[768px]:mt-0 max-[768px]:flex max-[768px]:justify-end max-[480px]:order-1 max-[480px]:justify-center">
          <img
            src={oliPrincipal}
            className="h-auto w-[300px] max-w-full max-[768px]:w-[240px]"
            alt="Avatar prototipado Oli"
          />
        </div>

        <div className="absolute inset-0 z-[3] text-[var(--cor-cor03)] max-[768px]:hidden">
          <div className="absolute right-[7%] top-[35%] flex h-[45px] w-[45px] items-center justify-center rounded-[25px] bg-[var(--cor-background)] text-[20px] shadow-[0_10px_20px_var(--cor-cor03)]">
            <SlEnergy />
          </div>

          <div className="absolute right-[33%] top-[30%] flex h-[45px] w-[45px] items-center justify-center rounded-[25px] bg-[var(--cor-background)] text-[20px] shadow-[0_10px_20px_var(--cor-cor03)]">
            <PiPlant />
          </div>

          <div className="absolute bottom-[12%] right-[22%] flex h-[45px] w-[45px] items-center justify-center rounded-[25px] bg-[var(--cor-background)] text-[20px] shadow-[0_10px_20px_var(--cor-cor03)]">
            <FaMoneyBillTransfer />
          </div>
        </div>
      </section>

      <section className="flex min-h-[90vh] flex-col justify-center bg-[var(--cor-background)] px-[8%] py-[7rem] shadow-[-2px_-2px_10px_var(--cor-sombra)] max-[992px]:min-h-auto max-[992px]:px-[6%] max-[992px]:py-[5rem] max-[768px]:px-[5%] max-[768px]:py-[4rem] max-[480px]:px-[1.5rem] max-[480px]:py-[2.5rem]">
        <h2 className="mt-[-40px] text-center text-[3.5rem] font-[600] text-[var(--cor-titulo01)] max-[992px]:mt-0 max-[992px]:text-[3rem] max-[768px]:text-[2.6rem] max-[480px]:text-[2.2rem]">
          Seções do projeto
        </h2>
        <p className="p-[1rem] pb-[6rem] text-center text-[1.5rem] text-[var(--cor-subtitulo01)] max-[992px]:pb-[3rem] max-[992px]:text-[1.4rem] max-[768px]:text-[1.3rem] max-[480px]:text-[1.2rem]">
          DevMode X SoulUp | 1TDSPY
        </p>

        <div className="grid grid-cols-1 gap-[2rem] min-[481px]:grid-cols-2 min-[481px]:gap-[1.5rem] min-[1200px]:grid-cols-4 min-[1200px]:gap-[2rem]">
          <Card
            titulo="Integrantes"
            texto="Conheça o time por trás do projeto."
            descricao="Pessoas com diferentes habilidades que se uniram para criar uma experiência digital mais inteligente, intuitiva e humana."
            icone={<HiMiniUserGroup />}
          >
            <BotaoHome texto="Saiba mais" destino="/integrantes" />
          </Card>

          <Card
            titulo="Sobre"
            texto="O avatar Oli nasce da ideia de tornar plataformas digitais mais humanas."
            descricao="Ele usa Inteligência Artificial e gamificação para ajudar o usuário de forma ativa, sugerindo ações e guiando a navegação conforme o comportamento."
            icone={<PiPlantLight />}
          >
            <BotaoHome texto="Saiba mais" destino="/sobre" />
          </Card>

          <Card
            titulo="FAQ"
            texto="Tire suas dúvidas sobre o projeto integrado à SoulUp."
            descricao="Aqui você entende como a Inteligência Artificial funciona, como o avatar é personalizado e quais benefícios ele traz para usuários e empresas."
            icone={<FaQuestionCircle />}
          >
            <BotaoHome texto="Saiba mais" destino="/faq" />
          </Card>

          <Card
            titulo="Contato"
            texto="Quer saber mais ou conversar com a equipe?"
            descricao="Envie sua dúvida para a nossa equipe. Vamos analisar e responder o quanto antes para te ajudar a entender melhor o projeto."
            icone={<FaEnvelope />}
          >
            <BotaoHome texto="Pergunte aqui" destino="/contato" />
          </Card>

          <Card
            titulo="Evolução Oli"
            texto="Acompanhe a evolução do avatar Oli."
            descricao="Conheça as diferentes fases do Oli e como ele evolui ao longo da experiência com o usuário."
            icone={<PiPlantFill />}
          >
            <BotaoHome texto="Saiba mais" destino="/evolucaooli" />
          </Card>

          <Card
            titulo="Missões"
            texto="Protótipo - Participe das missões e acumule pontos."
            descricao="Realize ações sustentáveis, complete desafios e acompanhe seu progresso durante a jornada!"
            icone={<FaFlagCheckered />}
          >
            <BotaoHome texto="Ver Protótipo" destino="/missao" />
          </Card>

          <Card
            titulo="Evolução Usuário"
            texto="Protótipo - Acompanhe sua evolução Oli."
            descricao="Visualize seu progresso, conquistas e desenvolvimento!"
            icone={<FaUserAstronaut />}
          >
            <BotaoHome texto="Ver Protótipo" destino="/evolucaousuario" />
          </Card>
        </div>
      </section>
    </main>
  );
}
