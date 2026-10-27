import { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import type { Login } from "../../types/types";
import CardAutenticacao from "../../components/CardAutenticacao/CardAutenticacao";

export default function Login() {
  
  useEffect(() => {
    document.title = "Login - DevMode";
  }, []);

  const navigate = useNavigate();

 
  const [login, setLogin] = useState<Login>({
    email: "",
    senha: "",
  });


  const [mostrarSenha, setMostrarSenha] = useState(false);

 
  async function entrar(e1: React.FormEvent<HTMLFormElement>) {
    e1.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login");

      if (!response.ok) {
        throw new Error("Erro ao buscar cadastro!");
      }

      const usuarios = await response.json();

    
      const usuarioEncontrado = usuarios.find(
        (usuario: Login) =>
          usuario.email === login.email && usuario.senha === login.senha,
      );

      if (!usuarioEncontrado) {
        alert("E-mail ou senha incorretos!");
        return;
      }


      localStorage.setItem("usuarioId", usuarioEncontrado.id);

      alert("Login realizado com sucesso!");

   
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar login. Tente novamente!");
    }
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[var(--cor-background)] px-[5%] py-[4rem]"
      aria-label="Página de login"
    >
      <CardAutenticacao
        titulo="Bem-vindo de volta!"
        texto="Continue sua jornada com o Oli e acompanhe suas ações por um futuro mais sustentável."
      >
        <h2 className="text-center text-[2.5rem] font-[600] text-[var(--cor-titulo01)] max-[480px]:text-[2rem]">
          Entrar
        </h2>

        <p className="mb-[2rem] mt-[0.5rem] text-center text-[1.1rem] text-[var(--cor-subtitulo01)]">
          Entre para continuar sua experiência
        </p>

        <form className="flex flex-col gap-[1.2rem]" onSubmit={entrar}>
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
                value={login.email}
                onChange={(evento) =>
                  setLogin({
                    ...login,
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
                value={login.senha}
                onChange={(evento) =>
                  setLogin({
                    ...login,
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
            Entrar
          </button>
        </form>

        <p className="mt-[2rem] text-center text-[1rem] text-[var(--cor-subtitulo01)]">
          Ainda não possui uma conta?
          <Link
            to="/cadastro"
            className="ml-[0.4rem] font-[600] text-[var(--cor-botao01)] hover:text-[var(--cor-botao02)]"
          >
            Criar conta
          </Link>
        </p>
      </CardAutenticacao>
    </main>
  );
}
