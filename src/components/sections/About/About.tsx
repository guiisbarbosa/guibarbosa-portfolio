import { InfoCard } from "@components/ui/InfoCard/InfoCard";

export function About() {
  const stats = [
    { number: "30+", label: "Projetos de estudo concluídos" },
    { number: "10+", label: "Tecnologias" },
    { number: "100%", label: "Dedicação" },
  ];

  return (
    <section className="bg-(--c-950) px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
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
              e pela busca constante por aprendizado. Conheci programação ainda
              jovem, por volta dos{" "}
              <span className="text-(--c-400) font-semibold">15 anos</span>,
              despertando em mim o interesse por entender como os softwares
              funcionam. Recentemente, passei a estudá-la com foco e disciplina,
              unindo tecnologia, design e resolução de problemas.
            </p>

            <p>
              Tenho experiência como{" "}
              <span className="text-(--c-400) font-semibold">
                Designer Gráfico
              </span>
              , área que me ensinou a unir{" "}
              <span className="text-(--highlight) font-semibold">
                criatividade
              </span>{" "}
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 sm:gap-8 mt-10">
          {stats.map((stat, index) => (
            <InfoCard key={index} main={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
