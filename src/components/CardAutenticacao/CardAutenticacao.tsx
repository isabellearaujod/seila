type CardAutenticacaoProps = {
    titulo: string;
    texto: string;
    children: React.ReactNode;
};

export default function CardAutenticacao({
    titulo,
    texto,
    children,
}: CardAutenticacaoProps) {
    return (
        <section className="grid w-full max-w-[1100px] overflow-hidden rounded-[25px] bg-[var(--cor-branco)] shadow-[0_10px_30px_var(--cor-sombra)] min-[768px]:grid-cols-2">
            <div
                className="flex flex-col items-center justify-center px-[8%] py-[5rem] text-center text-[var(--cor-branco)]"
                style={{ background: "var(--cor-bck-conteudo)" }}
            >
                <h1 className="text-[3rem] font-[600] max-[480px]:text-[2.3rem]">
                    {titulo}
                </h1>

                <p className="mt-[1rem] max-w-[450px] text-[1.2rem] leading-[1.7] text-[var(--cor-subtitulo02)]">
                    {texto}
                </p>
            </div>

            <div className="flex flex-col justify-center px-[8%] py-[4rem]">
                {children}
            </div>
        </section>
    );
}