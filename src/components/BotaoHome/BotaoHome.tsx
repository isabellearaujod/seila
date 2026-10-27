import { Link } from "react-router";

interface BotaoHomeProps {
  texto: string;
  destino: string;
}

export default function BotaoHome({texto, destino}: BotaoHomeProps) {

  return (
    <Link
      to={destino}
      className=" inline-block mt-[2rem] px-[1rem] py-[0.4rem] text-[1.1rem] text-[1.1rem] font-[600] text-[var(--cor-branco)] bg-[var(--cor-botao01)] rounded-[17px] shadow-[1px_1px_4px_var(--cor-sombra)] transition duration-300 hover:text-[var(--cor-botao01)] hover:bg-[var(--cor-branco)] hover:border hover:border-[var(--cor-sombra)] max-[768px]:px-[1.2rem] max-[768px]:py-[0.8rem] max-[768px]:text-[1.2rem]"
    >
      {texto}
    </Link>
  );
}
