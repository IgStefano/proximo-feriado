import { useState } from "react";

export default function SuggestionsForm({
  alecrimUrl,
}: {
  alecrimUrl: string;
}) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [holiday, setHoliday] = useState("");
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasSubmissionError, setHasSubmissionError] = useState(false);

  const handlePost = async () => {
    const requiredFields = [
      { name: "author", value: author },
      { name: "message", value: message },
      { name: "holiday", value: holiday },
    ];

    const emptyFields = requiredFields
      .filter((field) => !field.value.trim())
      .map((field) => field.name);

    setErrorFields(emptyFields);

    if (emptyFields.length > 0) {
      return;
    }

    await fetch(`${alecrimUrl}/alecrim-inbox-feriado`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inbox: { message, author, link, holiday } }),
    }).catch(() => {
      setHasSubmissionError(true);
    });
    setHasSubmitted(true);
  };

  if (hasSubmissionError) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-4xl text-red-500">
          Houve um erro ao enviar seus dados 😔
        </p>
        <small className="opacity-60">Tente novamente mais tarde</small>
      </div>
    );
  }

  if (hasSubmitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-4xl text-emerald-800 dark:text-emerald-200">
          Obrigado por sua contribuição!
        </p>
        <small className="opacity-60">Você é top 🤙</small>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 flex flex-col gap-2 text-sm opacity-70">
        <h2 className="text-center font-fredoka text-2xl">
          Deixe a sua sugestão de mensagem!
        </h2>
        <p className="text-balance text-center">
          Se você tem uma sugestão de mensagem para um feriado nacional,
          preencha o formulário abaixo.
        </p>
        <p className="text-balance text-center">
          Sua mensagem pode aparecer aqui com um agradecimento especial!
        </p>
      </div>

      <form id="form-message" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="Nome"
            className="text-emerald-800 dark:text-emerald-200"
          >
            Seu nome (e/ou @) <span className="text-red-500">*</span>
          </label>
          <input
            id="Nome"
            type="text"
            name="Nome"
            placeholder="João Silva (@joao_silva)"
            className={`rounded-md border py-2 pl-2 outline-none selection:bg-emerald-400 dark:text-gray-900 ${
              errorFields.includes("author") ? "border-red-500" : ""
            }`}
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
              setErrorFields((prev) =>
                prev.filter((field) => field !== "author"),
              );
            }}
          />
          {errorFields.includes("author") && (
            <p className="text-sm text-red-500">Nome é obrigatório</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="Link"
            className="text-emerald-800 dark:text-emerald-200"
          >
            Link pessoal (opcional)
          </label>
          <input
            id="Link"
            name="Link"
            placeholder="https://redesocial.com/joao_silva"
            className="rounded-md border py-2 pl-2 outline-none selection:bg-emerald-400 dark:text-gray-900"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="Sugestao"
            className="text-emerald-800 dark:text-emerald-200"
          >
            A mensagem que gostaria de sugerir{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="Sugestao"
            name="Sugestao"
            placeholder="Dia de comer peru 😎"
            className={`rounded-md border py-2 pl-2 outline-none selection:bg-emerald-400 dark:text-gray-900 ${
              errorFields.includes("message") ? "border-red-500" : ""
            }`}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setErrorFields((prev) =>
                prev.filter((field) => field !== "message"),
              );
            }}
          />
          {errorFields.includes("message") && (
            <p className="text-sm text-red-500">Mensagem é obrigatória</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="Feriado"
            className="text-emerald-800 dark:text-emerald-200"
          >
            Para qual feriado? <span className="text-red-500">*</span>
          </label>
          <input
            id="Feriado"
            name="Feriado"
            placeholder="Natal"
            className={`rounded-md border py-2 pl-2 outline-none selection:bg-emerald-400 dark:text-gray-900 ${
              errorFields.includes("holiday") ? "border-red-500" : ""
            }`}
            value={holiday}
            onChange={(event) => {
              setHoliday(event.target.value);
              setErrorFields((prev) =>
                prev.filter((field) => field !== "holiday"),
              );
            }}
          />
          {errorFields.includes("holiday") && (
            <p className="text-sm text-red-500">Feriado é obrigatório</p>
          )}
        </div>
        <button
          type="button"
          className="border border-emerald-500 bg-gray-50 px-4 py-2 font-bold text-emerald-500 transition-opacity duration-300 hover:opacity-70"
          onClick={async () => {
            await handlePost();
          }}
        >
          Enviar
        </button>
      </form>
    </>
  );
}
