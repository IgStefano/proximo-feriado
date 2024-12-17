import { useEffect } from "react";

export default function MessageChanger({
  changeMessage,
}: {
  changeMessage: () => void;
}) {
  useEffect(() => {
    function changeMessageOnKeydown(event: KeyboardEvent) {
      if (event.keyCode === 32) {
        changeMessage();
      }
    }

    document.addEventListener("keydown", changeMessageOnKeydown);

    return () => {
      document.removeEventListener("keydown", changeMessageOnKeydown);
    };
  }, []);

  return (
    <p
      onClick={changeMessage}
      className="mt-12 flex justify-center items-center w-full font-light bg-transparent no-underline outline-none cursor-pointer"
    >
      Aperte{" "}
      <span className="py-2 px-4 mx-2 border border-gray-200 rounded-md tracking-wide">
        Espaço
      </span>{" "}
      ou clique aqui
    </p>
  );
}
