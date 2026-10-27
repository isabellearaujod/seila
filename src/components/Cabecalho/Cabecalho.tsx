import { useState } from "react";
import { Link } from "react-router";
import logoDevMode from "../../img/logo-dev-mode.png";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="relative z-10 flex items-center justify-between px-[5rem] py-[10px] text-[15px] bg-[var(--cor-background)] shadow-[0_2px_8px_var(--cor-sombra)] max-[992px]:px-[15px] max-[480px]:px-[10px] max-[480px]:py-[8px]">
      <img
        src={logoDevMode}
        className="w-[80px] h-auto max-[992px]:w-[70px] max-[480px]:w-[55px]"
        alt="Logo do projeto DevMode"
      />

      <div
        className="hidden w-[35px] h-[25px] cursor-pointer flex-col justify-between max-[768px]:flex max-[768px]:ml-auto max-[768px]:p-[4px]"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span
          className={` block w-full h-[2px] rounded-[5px] bg-[var(--cor-preto)] transition duration-300 ease-in-out ${menuAberto ? "translate-x-[6px]" : ""} `}
        ></span>
        <span className="block w-full h-[2px] rounded-[5px] bg-[var(--cor-preto)] transition duration-300 ease-in-out"></span>
        <span
          className={` block w-full h-[2px] rounded-[5px] bg-[var(--cor-preto)] transition duration-300 ease-in-out ${menuAberto ? "-translate-x-[6px]" : ""} `}
        ></span>
      </div>

      <nav
        className="cabecalho__nav"
        aria-label="Menu de navegação entre páginas"
      >
        <ul
          className={` flex gap-[25px] max-[992px]:gap-[12px] max-[768px]:absolute max-[768px]:top-full max-[768px]:right-[15px] max-[768px]:flex-col max-[768px]:gap-[15px] max-[768px]:p-[12px] max-[768px]:rounded-[12px] max-[768px]:border max-[768px]:border-[var(--cor-sombra)] max-[768px]:bg-[var(--cor-background)] max-[768px]:shadow-[0_1px_10px_var(--cor-sombra)] max-[480px]:right-[10px] max-[480px]:gap-[8px] ${menuAberto ? "max-[768px]:flex" : "max-[768px]:hidden"} `}
        >
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/"> Home </Link>
          </li>
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/integrantes"> Integrantes </Link>
          </li>
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/faq"> FAQ </Link>
          </li>
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/contato"> Contato </Link>
          </li>
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/sobre"> Sobre </Link>
          </li>
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/evolucaooli"> Evolução Oli </Link>
          </li>
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/missao"> Missões </Link>
          </li>
          <li className="whitespace-nowrap hover:bg-[var(--cor-cabecalho)] hover:bg-clip-text hover:text-transparent hover:transition hover:duration-500 max-[480px]:p-[6px] max-[480px]:text-[12px]">
            <Link to="/evolucaousuario"> Evolução Usuário </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
