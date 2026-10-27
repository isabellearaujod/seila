import { useState } from "react";
import { useNavigate } from "react-router";
import { FaRobot } from "react-icons/fa";
import { PiChatCircleDots } from "react-icons/pi";

export default function ChatBot() {
  const [aberto, setAberto] = useState(false);
  const navegar = useNavigate();

  return (
    <aside className="fixed bottom-[100px] right-[20px] z-50">
      {!aberto && (
        <button
          type="button"
          onClick={() => setAberto(true)}
          aria-label="Abrir chatbot"
          className="flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-full bg-[var(--cor-chatbot)] text-[var(--cor-branco)] shadow-[2px_2px_8px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[2px]"
        >
          <FaRobot className="text-[2.4rem]" />
        </button>
      )}

      {aberto && (
        <div className="w-[300px] rounded-[15px] bg-[var(--cor-branco)] p-[20px] shadow-[0_2px_10px_var(--cor-sombra)]">
          <div className="mb-[17px] flex items-center justify-between">
            <h2 className="flex items-center gap-[6px] text-[1.6rem] font-[600]">
              <PiChatCircleDots />
              Chatbot Oli
            </h2>

            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar chatbot"
              className="cursor-pointer text-[1.8rem]"
            >
              ×
            </button>
          </div>

          <p className="mb-[16px] text-[1.2rem] text-[var(--cor-subtitulo01)]">
            Oii! Como posso ajudar?
          </p>

          <div className="flex flex-col gap-[8px]">
            <button
              type="button"
              onClick={() => navegar("/sobre")}
              className="cursor-pointer rounded-[10px] bg-[var(--cor-botao01)] px-[12px] py-[10px] text-[1.2rem] text-[var(--cor-branco)]"
            >
              Conhecer o projeto
            </button>

            <button
              type="button"
              onClick={() => navegar("/evolucaooli")}
              className="cursor-pointer rounded-[10px] bg-[var(--cor-botao01)] px-[12px] py-[10px] text-[1.2rem] text-[var(--cor-branco)]"
            >
              Conhecer a Oli
            </button>

            <button
              type="button"
              onClick={() => navegar("/missao")}
              className="cursor-pointer rounded-[10px] bg-[var(--cor-botao01)] px-[12px] py-[10px] text-[1.2rem] text-[var(--cor-branco)]"
            >
              Ver missões
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
