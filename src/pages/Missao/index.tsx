import { useEffect, useState } from "react";
import type { Usuario as UsuarioCadastrado } from "../../types/types";
import {
  FaLock,
  FaRecycle,
  FaBicycle,
  FaCamera,
  FaUsers,
  FaSeedling,
} from "react-icons/fa6";
import { PiDropFill } from "react-icons/pi";
import oliNivel4 from "../../img/oli-card-4.png";
import CardMissoes from "../../components/CardMissoes/CardMissoes";
import BotaoEvolucao from "../../components/BotaoEvolucao/BotaoEvolucao";
import CardAtividades from "../../components/CardAtividades/CardAtividades";
import OliHero from "../../components/OliHero/OliHero";
import CabecalhoPagina from "../../components/CabecalhoPagina/CabecalhoPagina";

export default function Missao() {
 
  useEffect(() => {
    document.title = "Missões - Protótipo";
  }, []);


  const [usuario, setUsuario] = useState<UsuarioCadastrado | null>(null);


  async function concluirMissao(idMissao: number, pontosMissao: number) {
    if (!usuario) {
      return;
    }

  
    if (usuario.missoesConcluidas.includes(idMissao)) {
      alert("Essa missão já foi concluída!");
      return;
    }


    const usuarioAtualizado = {
      ...usuario,
      pontos: usuario.pontos + pontosMissao,
      gotas: usuario.gotas + pontosMissao,
      missoes: usuario.missoes + 1,
      co2: usuario.co2 + 0.2,
      missoesConcluidas: [...usuario.missoesConcluidas, idMissao],
    };

    try {

      const response = await fetch(
        `http://localhost:3001/cadastro/${usuario.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuarioAtualizado),
        },
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar usuário!");
      }

  
      setUsuario(usuarioAtualizado);

      alert(`Missão concluída! Você ganhou ${pontosMissao} pontos!`);
    } catch (error) {
      console.error(error);
      alert("Não foi possível concluir a missão.");
    }
  }

  useEffect(() => {
   
    const carregarUsuario = async () => {
      try {
        const usuarioId = localStorage.getItem("usuarioId");

        if (!usuarioId) {
          return;
        }

        const response = await fetch(
          `http://localhost:3001/cadastro/${usuarioId}`,
        );

        if (!response.ok) {
          throw new Error("Usuário não encontrado!");
        }

        const data: UsuarioCadastrado = await response.json();

        // Guarda os dados do usuário
        setUsuario(data);
      } catch (error) {
        console.error(error);
      }
    };

    carregarUsuario();
  }, []);

 
  const missoes = usuario?.missoes ?? 0;
  const gotas = usuario?.gotas ?? 0;
  const co2 = usuario?.co2 ?? 0;
  const pontos = usuario?.pontos ?? 0;
  const valorPix = pontos * 0.002;

  return (
    <main
      className="min-h-screen w-full bg-[var(--cor-background)]"
      aria-label="Página de missões do projeto SoulUp"
    >
      <CabecalhoPagina
        titulo="Protótipo - Missões"
        descricao="Complete missões agora e acumule gotas!"
      />

      <div className="mx-auto w-full max-w-[1200px] px-[2rem] py-[3rem] max-[992px]:px-[1.5rem] max-[480px]:px-[1rem] max-[480px]:py-[2rem]">
        <OliHero
          nivel={
            <span className="text-[0.8rem] font-[700] leading-[1.2] text-[var(--cor-branco)]">
              Nível 4
            </span>
          }
          titulo={
            <h2 className="text-[1.6rem] font-[700] text-[var(--cor-titulo01)]">
              Oli
            </h2>
          }
          fase={
            <span className="flex items-center gap-[0.3rem] rounded-[8px] bg-[var(--cor-cor05)] px-[0.6rem] py-[0.3rem] text-[0.8rem] font-[500] text-[var(--cor-cor07)]">
              <FaSeedling className="text-[0.8rem]" />
              Arbusto
            </span>
          }
          progresso={
            <p className="text-[1.2rem] text-[var(--cor-subtitulo01)]">
              {gotas}/800 gotas
            </p>
          }
          legenda={
            <span className="text-[1rem] text-[var(--cor-subtitulo01)] max-[480px]:text-[0.9rem]">
              Faltam {Math.max(800 - gotas, 0)} gotas para o próximo nível
            </span>
          }
          avatar={
            <img
              src={oliNivel4}
              alt="Avatar Oli"
              width="160"
              className="max-w-full"
            />
          }
        />

        <div className="grid grid-cols-1 gap-[2rem] min-[993px]:grid-cols-[minmax(0,1fr)_320px]">
          <section className="flex flex-col gap-[1.5rem]">
            <CardMissoes
              titulo="Use uma garrafa reutilizável"
              subtitulo="Reduza o uso de plástico"
              nivel="Fácil"
              pontos="+10"
              imagem={<FaLock />}
              iconePremio={<PiDropFill />}
            >
              <BotaoEvolucao
                texto="Concluir"
                onClick={() => concluirMissao(1, 10)}
              />
            </CardMissoes>

            <CardMissoes
              titulo="Separe o lixo reciclável"
              subtitulo="Pequenas atitudes, grandes impactos"
              nivel="Fácil"
              pontos="+15"
              imagem={<FaRecycle />}
              iconePremio={<PiDropFill />}
            >
              <BotaoEvolucao
                texto="Concluir"
                onClick={() => concluirMissao(2, 15)}
              />
            </CardMissoes>

            <CardMissoes
              titulo="Vá de bike ou caminhe"
              subtitulo="Menos emissões, mais saúde"
              nivel="Médio"
              pontos="+20"
              imagem={<FaBicycle />}
              iconePremio={<PiDropFill />}
            >
              <BotaoEvolucao
                texto="Concluir"
                onClick={() => concluirMissao(3, 20)}
              />
            </CardMissoes>

            <CardMissoes
              titulo="Poste 3 fotos ecológicas"
              subtitulo="Compartilhe suas atitudes no feed"
              nivel="Médio"
              pontos="+30"
              imagem={<FaCamera />}
              iconePremio={<PiDropFill />}
            >
              <BotaoEvolucao
                texto="Concluir"
                onClick={() => concluirMissao(4, 30)}
              />
            </CardMissoes>

            <CardMissoes
              titulo="Participe de 2 comunidades ODS"
              subtitulo="Conecte-se com quem pensa como você"
              nivel="Fácil"
              pontos="+20"
              imagem={<FaUsers />}
              iconePremio={<PiDropFill />}
            >
              <BotaoEvolucao
                texto="Concluir"
                onClick={() => concluirMissao(5, 20)}
              />
            </CardMissoes>
          </section>

          <CardAtividades
            missoes={missoes}
            gotas={gotas}
            co2={co2}
            pontos={pontos}
            valorPix={valorPix}
          />
        </div>
      </div>
    </main>
  );
}