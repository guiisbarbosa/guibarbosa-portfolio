import { useState } from "react";
import { RiMenuFold4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="md:hidden text-(--highlight) text-2xl"
        onClick={handleMenuClick}
        aria-label="Abrir menu"
      >
        <RiMenuFold4Line />
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-(--c-950) shadow-lg transform transition-transform duration-300 z-50 md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold text-(--highlight)">GB</h2>
          <button
            className="text-white text-2xl"
            onClick={handleMenuClick}
            aria-label="Fechar menu"
          >
            <IoClose />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8">
          <ul className="text-white flex flex-col gap-6">
            <li>
              <a
                href="#home"
                className="menu-link text-lg"
                onClick={handleNavClick}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="menu-link text-lg"
                onClick={handleNavClick}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="menu-link text-lg"
                onClick={handleNavClick}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="menu-link text-lg"
                onClick={handleNavClick}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="menu-link text-lg"
                onClick={handleNavClick}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
