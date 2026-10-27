import { FaGithub } from "react-icons/fa";

export default function Rodape() {
  return (
    <footer className="flex w-full items-center justify-between gap-[2rem] bg-[image:var(--cor-rodape)] px-[2rem] py-[1rem] text-[0.8rem] text-[var(--cor-branco)] max-[768px]:flex-col max-[768px]:gap-[1rem] max-[768px]:px-[1.5rem] max-[768px]:py-[1.5rem]">
      <div className="text-left max-[768px]:text-center">
        <p>© 2026 SoulUp X DevMode – 1TDSPY. All rights reserved.</p>
      </div>

      <a
        href="https://github.com/isabellearaujod/SoulUp_DevMode-1TDSPY"
        aria-label="Acessar repositório do projeto no GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[0.5rem] rounded-[25px] bg-[var(--cor-texto02)] px-[1rem] py-[0.7rem] text-[0.9rem] text-[var(--cor-subtitulo02)] shadow-[0_2px_8px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[2px] hover:bg-[var(--cor-textorgb)]"
      >
        <FaGithub className="text-[1.2rem]" />
        GitHub
      </a>

      <div className="text-right max-[768px]:text-center">
        <p>
          Made with <span>♥</span> by the DevMode team
        </p>
      </div>
    </footer>
  );
}