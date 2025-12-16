import { FaRegMoon } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="flex w-full justify-between items-center px-8 py-4 bg-(--bg-header)">
      <h1 className="text-3xl font-bold text-(--highlight)">GB</h1>

      <nav className="">
        <ul className="text-white flex gap-4 items-center">
          <li className="hover:text-(--highlight) transition-colors">
            <a href="#">Início</a>
          </li>
          <li className="hover:text-(--highlight) transition-colors">
            <a href="#">Sobre</a>
          </li>
          <li className="hover:text-(--highlight) transition-colors">
            <a href="#">Habilidades</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li className="hover:text-(--highlight) transition-colors">
            <a href="#">Contato</a>
          </li>
          <li className="hover:text-(--highlight) transition-colors text-2xl">
              <FaRegMoon />
          </li>
        </ul>
      </nav>
    </header>
  );
};
