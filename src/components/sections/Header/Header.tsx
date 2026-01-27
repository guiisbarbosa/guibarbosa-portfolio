import { MobileMenu } from "../../ui/MobileMenu/MobileMenu";

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = ({ isScrolled }: HeaderProps) => {
  return (
    <header
      className={`fixed flex w-full justify-between items-center px-8 py-4 transition-all duration-300 h-18 z-1 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-(--bg-page)/80 backdrop-blur-md shadow-lg"
          : "bg-(--bg-hpage)"
      }`}
    >
      <h1 className="text-3xl font-bold text-(--highlight)">GB</h1>

      <nav className="hidden md:block">
        <ul className="text-white flex gap-4 items-center">
          <li>
            <a href="#home" className="menu-link">
              Início
            </a>
          </li>
          <li>
            <a href="#about" className="menu-link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-link">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" className="menu-link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-link">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <MobileMenu />
    </header>
  );
};
