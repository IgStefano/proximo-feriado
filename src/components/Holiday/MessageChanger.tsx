import { useEffect } from "react";

export default function MessageChanger({
  changeMessage,
}: {
  changeMessage: () => void;
}) {
  useEffect(() => {
    const changeMessageOnKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 32) {
        changeMessage();
      }
    };

    document.addEventListener("keydown", changeMessageOnKeydown);

    return () => {
      document.removeEventListener("keydown", changeMessageOnKeydown);
    };
  }, [changeMessage]);

  return (
    <p
      onClick={changeMessage}
      className="mt-12 flex w-full cursor-pointer items-center justify-center bg-transparent font-light no-underline outline-none"
    >
      Aperte{" "}
      <span className="mx-2 rounded-md border border-gray-200 px-4 py-2 tracking-wide">
        Espaço
      </span>{" "}
      ou clique aqui
    </p>
  );
}
