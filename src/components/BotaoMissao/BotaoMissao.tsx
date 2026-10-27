interface BotaoMissaoProps {
  texto: string;
  onClick: () => void;
}

export default function BotaoMissao({texto, onClick}: BotaoMissaoProps) {

  return (
    <button type="button" onClick={onClick}>
      {texto}
    </button>
  );
}
