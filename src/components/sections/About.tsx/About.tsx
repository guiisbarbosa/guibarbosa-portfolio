export function About() {
  const stats = [
    { number: "8+", label: "Anos de experiência" },
    { number: "30+", label: "Projetos concluídos" },
    { number: "10+", label: "Tecnologias" },
    { number: "100%", label: "Dedicação" },
  ];

  return (
    <section className="min-h-screen bg-(--c-950) px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            <span className="text-(--highlight)">Sobre mim</span>
          </h2>
        </div>

        <div className="bg-linear-to-b from-(--c-800)/30 to-(--c-800)/10 border border-(--c-600)/30 rounded-2xl p-8 sm:p-10 md:p-12 mb-12">
          <div className="space-y-6 text-(--neutral-light) text-base sm:text-lg leading-relaxed">
            <p>
              Sou uma pessoa movida pela{" "}
              <span className="text-(--c-400) font-semibold">curiosidade</span>{" "}
              e pela busca constante por aprendizado. Meu primeiro contato com a
              programação aconteceu aos{" "}
              <span className="text-(--c-400) font-semibold">15 anos</span>,
              despertando em mim o interesse por entender como as coisas
              funcionam e criar soluções que façam a diferença.
            </p>

            <p>
              Tenho experiência como{" "}
              <span className="text-(--c-400) font-semibold">
                Designer Gráfico
              </span>
              , área que me ensinou a unir{" "}
              <span className="text-(--highlight) font-semibold">criatividade</span>{" "}
              e atenção aos detalhes.
            </p>

            <p>
              Sou persistente na busca por evolução — tanto profissional quanto
              pessoal — e acredito que a tecnologia é uma das formas mais
              poderosas de transformar{" "}
              <span className="text-(--highlight) font-semibold">
                ideias em realidade
              </span>
              .
            </p>
          </div>
        </div>

        <div className="border-l-4 border-(--c-400) pl-6 mt-8 py-4">
          <p className="text-lg sm:text-xl text-(--c-400) italic font-medium">
            "Transformar ideias em realidade através da tecnologia"
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-linear-to-b from-(--c-800)/40 to--(--c-900)/20 border border-(--c-600)/30 rounded-xl p-6 sm:p-8 text-center hover:border-(--c-600)/70 transition-colors duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-(--c-400) mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-(--neutral-light)">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
