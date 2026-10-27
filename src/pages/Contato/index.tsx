import { TbSend } from "react-icons/tb";
import avatarOliDuvida from "../../img/avatar-oli-duvida.png";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface FormularioContato {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioContato>();

  useEffect(() => {
    document.title = "Contato - DevMode";
  }, []);

  function enviarFormulario(data: FormularioContato) {
    console.log(data);
    alert("Enviado com sucesso =))");
  }

  return (
    <main
      className="w-full flex-1 bg-[var(--cor-background)] pb-[40px]"
      aria-label="Formulário de contato para envio de dúvidas ao projeto"
    >
      <section className="bg-[image:var(--cor-bck-conteudo)] px-[20px] py-[55px] text-center text-[var(--cor-branco)]">
        <h1 className="mb-[10px] text-[2rem] font-[700] max-[480px]:text-[1.7rem]">
          Ainda ficou com alguma dúvida?
        </h1>

        <p className="mx-auto max-w-[600px] text-[1.3rem] text-[var(--cor-branco)] max-[480px]:text-[1.1rem]">
          Se surgiu alguma pergunta específica sobre o projeto ou algum detalhe
          que você gostaria de entender melhor, entre em contato com a nossa
          equipe!
        </p>
      </section>

      <div className="mx-auto mt-[40px] mb-[40px] flex w-full max-w-[1200px] flex-row items-center justify-between gap-[80px] px-[20px] max-[992px]:gap-[40px] max-[992px]:px-[20px] max-[768px]:justify-center max-[768px]:px-[15px] max-[480px]:mt-[30px] max-[480px]:mb-[30px]">
        <form
          onSubmit={handleSubmit(enviarFormulario)}
          className="w-[55%] max-[768px]:w-[80%] max-[480px]:w-full"
        >
          <div className="flex gap-[15px] max-[480px]:flex-col max-[480px]:gap-[1px]">
            <div className="mb-[25px] flex w-full flex-col">
              <label
                htmlFor="nome"
                className="mb-[7px] text-[15px] font-[600] text-[var(--cor-titulo01)]"
              >
                Nome*
              </label>

              <input
                type="text"
                id="nome"
                {...register("nome", {
                  required: "O nome é obrigatório.",
                })}
                className="rounded-[15px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] p-[14px] text-[13px] text-[var(--cor-texto)] outline-none focus:border-[var(--cor-botao01)]"
              />

              {errors.nome && (
                <span className="mt-[5px] text-[12px] text-red-500">
                  {errors.nome.message}
                </span>
              )}
            </div>

            <div className="mb-[25px] flex w-full flex-col">
              <label
                htmlFor="email"
                className="mb-[7px] text-[15px] font-[600] text-[var(--cor-titulo01)]"
              >
                E-mail*
              </label>

              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "O e-mail é obrigatório.",
                })}
                className="rounded-[15px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] p-[14px] text-[13px] text-[var(--cor-texto)] outline-none focus:border-[var(--cor-botao01)]"
              />

              {errors.email && (
                <span className="mt-[5px] text-[12px] text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="mb-[25px] flex w-full flex-col">
            <label
              htmlFor="mensagem"
              className="mb-[7px] text-[15px] font-[600] text-[var(--cor-titulo01)]"
            >
              Como podemos ajudar?*
            </label>

            <textarea
              id="mensagem"
              rows={8}
              {...register("mensagem", {
                required: "A mensagem é obrigatória.",
                minLength: {
                  value: 10,
                  message: "A mensagem deve ter no mínimo 10 caracteres.",
                },
              })}
              className="min-h-[150px] rounded-[15px] border border-[var(--cor-linha)] bg-[var(--cor-branco)] p-[14px] text-[13px] text-[var(--cor-texto)] outline-none focus:border-[var(--cor-botao01)]"
            />

            {errors.mensagem && (
              <span className="mt-[5px] text-[12px] text-red-500">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            aria-label="Enviar formulário de contato"
            className="flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-[15px] border-0 bg-[var(--cor-botao02)] p-[15px] text-[15px] font-[600] text-[var(--cor-branco)] transition duration-500 hover:-translate-y-[2px] hover:border hover:border-[var(--cor-sombra)] hover:bg-[var(--cor-background)] hover:text-[var(--cor-botao02)] max-[480px]:p-[13px] max-[480px]:text-[14px]"
          >
            Enviar
            <TbSend className="text-[20px]" />
          </button>
        </form>
        <div className="flex w-[45%] items-center justify-center max-[768px]:hidden">
          <img
            src={avatarOliDuvida}
            alt="Avatar Oli para dúvidas"
            className="w-[300px] max-w-full"
          />
        </div>
      </div>
    </main>
  );
}
