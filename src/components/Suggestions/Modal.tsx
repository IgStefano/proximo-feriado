import type { ReactNode, RefObject } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  handleCloseModal,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef as RefObject<HTMLDivElement>, handleCloseModal);

  return (
    <section
      className={`absolute flex h-full w-full items-center justify-center bg-black/40 transition-opacity ${!isOpen && "pointer-events-none opacity-0"}`}
    >
      <div
        ref={modalRef}
        className="relative h-full w-full overflow-y-scroll bg-white px-12 py-4 sm:max-h-[80%] sm:max-w-[75%] md:max-h-[480px] md:max-w-[600px]"
      >
        <svg
          onClick={handleCloseModal}
          className="absolute right-4 top-4 cursor-pointer opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
          />
        </svg>
        <div>{children}</div>
      </div>
    </section>
  );
}
