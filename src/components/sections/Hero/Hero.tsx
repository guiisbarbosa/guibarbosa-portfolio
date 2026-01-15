import { Button } from "@components/ui/Button/Button";

import profileImage from "@assets/profile-mockup.jpg";

import { FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
  const codeLines = [
    "> const developer = {",
    '    name: "Guilherme Barbosa",',
    '    role: "Desenvolvedor Web e Mobile FullStack",',
    '    passion: "Tecnologia",',
    '    interests: ["games", "filmes", "séries",',
    '                "músicas", "mundo nerd"],',
    '    motto: "Transformar o mundo com a tecnologia"',
    "  };",
  ];

  return (
    <section className="w-full flex-col lg:min-h-screen flex justify-evenly items-center gap-4 md:gap-7 py-6 px-4 pt-18 md:px-6 lg:flex-row bg-linear-to-b from-(--c-950) to-(--c-700)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-(--c-400)/20 rounded-full blur-3xl animate-[float_2s_ease-in-out_infinite]" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-(--highlight)/20 rounded-full blur-3xl animate-[float_2s_ease-in-out_infinite]"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="w-72 lg:w-96 aspect-square rounded-full border-4 border-(--c-400) overflow-hidden shadow-[0_0_70px_var(--c-800)]">
        <img src={profileImage} />
      </div>

      <div className="flex flex-col w-full max-w-3xl">
        <div className="flex-1 flex flex-col items-start max-w-3xl">
          <div className="w-full bg-(--c-900)/50 backdrop-blur-xs border border-[#3d1e49] rounded-lg p-6 md:p-8 text-left shadow-[0_0_70px_var(--c-800)]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-b-[#3d1e49]">
              <div className="flex gap-2">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500" />
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground ml-2 text-[#7a6284]">
                developer.ts
              </span>
            </div>
            <pre className="text-xs md:text-base font-mono overflow-x-auto pb-3.5">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className="hover:bg-(--c-700)/20 px-2 rounded transition-smooth cursor-context-menu"
                >
                  {line}
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div className="flex mt-6 w-full gap-4">
          <Button variant="primary" asChild>
            <a href="http://wa.me/5535991071126">
              Entrar em contato <FaWhatsapp size={20} />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">Ver projetos</a>
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex absolute md:right-12 lg:right-auto bottom-6 md:bottom-1 animate-bounce [@media(max-height:600px)]:hidden">
        <div className="w-6 h-10 border-2 border-(--c-400) rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-(--c-400) rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
