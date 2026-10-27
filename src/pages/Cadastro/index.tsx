import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import type { Cadastro } from "../../types/types";
import CardAutenticacao from "../../components/CardAutenticacao/CardAutenticacao";

export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro - DevMode";
  }, []);

  const navigate = useNavigate();


  const [cadastro, setCadastro] = useState<Cadastro>({
    nome: "",
    email: "",
    senha: "",
  });


  const [mostrarSenha, setMostrarSenha] = useState(false);

  
  async function cadastrar(e1: React.FormEvent<HTMLFormElement>) {
    e1.preventDefault();

    try {
     
      const response = await fetch("http://localhost:3001/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: cadastro.nome,
          email: cadastro.email,
          senha: cadastro.senha,
          pontos: 0,
          gotas: 0,
          missoes: 0,
          co2: 0,
          missoesConcluidas: [],
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar conta!");
      }

      alert("Conta criada com sucesso!");


      navigate("/login");

    } catch (error) {
      console.error(error);
      alert("Erro ao criar conta. Tente novamente!");
    }
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[var(--cor-background)] px-[5%] py-[4rem]"
      aria-label="Página de cadastro"
    >
      <CardAutenticacao
        titulo="Faça parte dessa conexão"
        texto="Crie sua conta e comece sua jornada por um futuro mais sustentável com o Oli"
      >
        <h2 className="text-center text-[2.5rem] font-[600] text-[var(--cor-titulo01)] max-[480px]:text-[2rem]">
          Criar conta
        </h2>

        <p className="mb-[2rem] mt-[0.5rem] text-center text-[1.1rem] text-[var(--cor-subtitulo01)]">
          Preencha seus dados para começar
        </p>

        <form className="flex flex-col gap-[1.2rem]" onSubmit={cadastrar}>
          <div>
            <label
              htmlFor="nome"
              className="mb-[0.5rem] block font-[500] text-[var(--cor-titulo01)]"
            >
              Nome
            </label>

            <div className="flex items-center rounded-[12px] border border-[var(--cor-linha)] bg-[var(--cor-background)] px-[1rem]">
              <FaUser className="text-[var(--cor-cor01)]" />

              <input
                id="nome"
                type="text"
                placeholder="Digite seu nome"
                value={cadastro.nome}
                onChange={(evento) =>
                  setCadastro({
                    ...cadastro,
                    nome: evento.target.value,
                  })
                }
                className="w-full bg-transparent p-[1rem] text-[var(--cor-texto)] outline-none placeholder:text-[var(--cor-subtitulo01)]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-[0.5rem] block font-[500] text-[var(--cor-titulo01)]"
            >
              E-mail
            </label>

            <div className="flex items-center rounded-[12px] border border-[var(--cor-linha)] bg-[var(--cor-background)] px-[1rem]">
              <FaEnvelope className="text-[var(--cor-cor01)]" />

              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={cadastro.email}
                onChange={(evento) =>
                  setCadastro({
                    ...cadastro,
                    email: evento.target.value,
                  })
                }
                className="w-full bg-transparent p-[1rem] text-[var(--cor-texto)] outline-none placeholder:text-[var(--cor-subtitulo01)]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="senha"
              className="mb-[0.5rem] block font-[500] text-[var(--cor-titulo01)]"
            >
              Senha
            </label>

            <div className="flex items-center rounded-[12px] border border-[var(--cor-linha)] bg-[var(--cor-background)] px-[1rem]">
              <FaLock className="text-[var(--cor-cor01)]" />

              <input
                id="senha"
                type={mostrarSenha ? "text" : "password"}
                placeholder="Digite sua senha"
                value={cadastro.senha}
                onChange={(evento) =>
                  setCadastro({
                    ...cadastro,
                    senha: evento.target.value,
                  })
                }
                className="w-full bg-transparent p-[1rem] text-[var(--cor-texto)] outline-none placeholder:text-[var(--cor-subtitulo01)]"
              />

              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="text-[var(--cor-cor03)]"
                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
              >
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-[1rem] rounded-[12px] bg-[var(--cor-botao01)] px-[1.5rem] py-[1rem] text-[1.1rem] font-[600] text-[var(--cor-branco)] shadow-[0_5px_15px_var(--cor-sombra)] transition hover:bg-[var(--cor-botao02)]"
          >
            Criar conta
          </button>
        </form>

        <p className="mt-[2rem] text-center text-[1rem] text-[var(--cor-subtitulo01)]">
          Já possui uma conta?
          <Link
            to="/login"
            className="ml-[0.4rem] font-[600] text-[var(--cor-botao01)] hover:text-[var(--cor-botao02)]"
          >
            Entrar
          </Link>
        </p>
      </CardAutenticacao>
    </main>
  );
}