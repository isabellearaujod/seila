import { Link } from "react-router";

interface CtaProps {
  titulo: string;
  texto: string;
  textoBotao: string;
  destino: string;
}

export default function Cta({ titulo, texto, textoBotao, destino }: CtaProps) {

  return (
    <section className="mx-[4rem] my-[4rem] rounded-[30px] bg-[image:var(--cor-cor02)] px-[30px] py-[50px] text-center text-[var(--cor-branco)] max-[480px]:mx-[1.5rem] max-[480px]:my-[2.5rem] max-[480px]:px-[18px] max-[480px]:py-[25px]">
      <h2 className="mb-[18px] text-[20px] font-[600] max-[480px]:text-[18px]">
        {titulo}
      </h2>

      <p className="mb-[30px] text-[15px] leading-[1.7] max-[480px]:mb-[18px] max-[480px]:text-[14px]">
        {texto}
      </p>

      <Link
        to={destino}
        className="inline-block cursor-pointer rounded-[15px] bg-[var(--cor-branco)] px-[1rem] py-[0.8rem] text-[13px] font-[600] text-[var(--cor-botao01)] shadow-[1px_1px_4px_var(--cor-sombra)] transition duration-300 hover:border hover:border-[var(--cor-sombra)] hover:bg-[var(--cor-textorgb)] hover:text-[var(--cor-branco)]"
      >
        {textoBotao}
      </Link>
    </section>
  );
}
