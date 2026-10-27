import { FaGithub, FaLinkedin } from "react-icons/fa";

interface CardIntegranteProps {
  titulo: string;
  info: string;
  descricao: string;
  imagem: string;
  github: string;
  linkedin: string;
}

export default function CardIntegrante({
  titulo,
  info,
  descricao,
  imagem,
  github,
  linkedin,
}: CardIntegranteProps) {

  return (
    <article className="flex min-h-[430px] w-full flex-col justify-between rounded-[15px] border border-[var(--cor-sombra)] bg-[var(--cor-background)] p-[1.8rem] text-left transition duration-300 hover:-translate-y-[3px] hover:shadow-[2px_2px_5px_var(--cor-sombra)] max-[992px]:min-h-0 max-[480px]:p-[1.5rem]">
      <img
        src={imagem}
        alt={`Foto de ${titulo}`}
        className="mx-auto block max-w-[200px] rounded-[8px]"
      />
      <h2 className="p-[3%] text-center text-[17px] font-[500] text-[var(--cor-preto)] max-[480px]:text-[16px]">
        {titulo}
      </h2>
      <p className="text-center text-[16px] text-[var(--cor-subtitulo01)] max-[480px]:text-[14px]">
        {info}
      </p>
      <p className="mt-[10px] max-w-[95%] grow text-left text-[15px] leading-[1.5] text-[var(--cor-texto)] max-[480px]:text-[14px]">
        {descricao}
      </p>

      <nav aria-label={`Redes sociais de ${titulo}`}>
        <ul className="flex justify-center gap-[20px] max-[480px]:gap-[15px]">
          <li>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-[5px] rounded-[15px] bg-[var(--cor-botao01)] px-[12px] py-[7px] text-[12px] font-[600] text-[var(--cor-branco)] shadow-[1px_1px_4px_var(--cor-sombra)] transition duration-500 hover:-translate-y-[1px] hover:border hover:border-[var(--cor-sombra)] hover:bg-[var(--cor-background)] hover:text-[var(--cor-botao01)] max-[480px]:px-[10px] max-[480px]:py-[10px]"
            >
              <FaGithub /> GitHub
            </a>
          </li>

          <li>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-[5px] rounded-[15px] bg-[var(--cor-botao01)] px-[12px] py-[7px] text-[12px] font-[600] text-[var(--cor-branco)] shadow-[1px_1px_4px_var(--cor-sombra)] transition duration-500 hover:-translate-y-[1px] hover:border hover:border-[var(--cor-sombra)] hover:bg-[var(--cor-background)] hover:text-[var(--cor-botao01)] max-[480px]:px-[10px] max-[480px]:py-[10px]"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
}
