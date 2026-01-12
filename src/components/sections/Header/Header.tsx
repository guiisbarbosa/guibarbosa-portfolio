import { FaRegMoon } from "react-icons/fa6";

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = ({ isScrolled }: HeaderProps) => {
  return (
    <header
      className={`flex w-full justify-between items-center px-8 py-4 transition-all duration-300 h-18 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-(--bg-page)/80 backdrop-blur-md shadow-lg"
          : "bg-(--bg-hpage)"
      }`}
    >
      <h1 className="text-3xl font-bold text-(--highlight)">GB</h1>

      <nav className="">
        <ul className="text-white flex gap-4 items-center">
          <li>
            <a href="#" className="menu-link">
              Início
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Contato
            </a>
          </li>
          <li
            className={`hover:text-(--highlight) transition-colors text-2xl cursor-pointer`}
          >
            <FaRegMoon />
          </li>
        </ul>
      </nav>
    </header>
  );
};
