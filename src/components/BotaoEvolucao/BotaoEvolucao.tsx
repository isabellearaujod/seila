interface BotaoMissaoProps {
  texto: string;
  onClick: () => void;
}

export default function BotaoEvolucao({texto, onClick}: BotaoMissaoProps) {

  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer rounded-[10px] bg-[var(--cor-botao01)] px-[1rem] py-[0.5rem] text-[0.9rem] font-[600] text-[var(--cor-branco)] transition duration-300 hover:bg-[var(--cor-texto02)]"
    >
      {texto}
    </button>
  );
}
