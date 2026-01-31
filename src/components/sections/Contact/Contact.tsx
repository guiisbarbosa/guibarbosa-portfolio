import { Button } from "@/components/ui/Button/Button";
import { useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "5535991071126";
  const whatsappMessage = encodeURIComponent(
    `Olá! Meu nome é ${name || "Visitante"}.\n\n${message}`,
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const solcialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/guiisbarbosa/",
      icon: FiLinkedin,
    },
    {
      name: "GitHub",
      url: "https://www.linkedin.com/in/guiisbarbosa/",
      icon: FiGithub,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/guisbarbosa_",
      icon: FiInstagram,
    },
  ];

  return (
    <section
      className="w-full py-16 px-4 md:px-6 lg:px-8 bg-(--c-900)"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-(--highlight) mb-4">
            Contato
          </h2>

          <p className="text-(--neutral-light) text-lg">
            Vamos trabalhar juntos? Entre em contato!
          </p>
        </div>

        <div className="flex flex-col text-(--neutral-light) items-center">
          <div className="min-w-90 md:min-w-140 bg-(--c-900)/50 backdrop-blur-xs border border-[#3d1e49] rounded-lg p-6 md:p-8 text-left shadow-[0_0_70px_var(--c-800)]">
            <h3 className="text-xl font-bold mb-6 text-center">
              Utilize o formulário abaixo para me enviar uma mensagem pelo
              Whatsapp
            </h3>

            <form
              className="space-y-4 w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col">
                <label className="font-medium mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/20 border border-(--c-800) rounded-lg px-4 py-3 placeholder-(--c-700) focus:outline-none focus:border-(--highlight) transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-2">Mensagem</label>
                <textarea
                  placeholder="Sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="bg-black/20 border border-(--c-800) rounded-lg px-4 py-3 placeholder-(--c-700) focus:outline-none focus:border-(--highlight) transition-colors resize-none"
                />
              </div>

              <Button className="w-full" asChild>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  Enviar <IoIosSend size={20} />
                </a>
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <h3 className="text-2xl font-bold text-white mb-8">
              Conecte-se comigo
            </h3>

            <div className="flex gap-8">
              {solcialLinks.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  key={link.name}
                >
                  <div className="bg-(--c-800) w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer text-(--neutral-light) hover:bg-(--c-950) hover:text-(--highlight)">
                    <link.icon />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
