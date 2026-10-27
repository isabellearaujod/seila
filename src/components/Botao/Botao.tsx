import { Link } from "react-router";

interface BotaoProps {
  texto: string;
  destino: string;
}

export default function Botao({texto, destino}: BotaoProps) {

  return (
    <Link
      to={destino}
      className="inline-block cursor-pointer rounded-[12px] bg-[var(--cor-cor01)] px-[26px] py-[14px] text-[18px] font-[600] text-[var(--cor-branco)] shadow-[0_4px_10px_var(--cor-sombra)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_14px_var(--cor-sombra)] max-[480px]:px-[20px] max-[480px]:py-[12px] max-[480px]:text-[15px]"
    >
      {texto}
    </Link>
  );
}
