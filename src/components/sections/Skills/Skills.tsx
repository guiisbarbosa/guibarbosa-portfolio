import { InfoCard } from "@components/ui/InfoCard/InfoCard";

export function Skills() {
  const softSkills = [
    { main: "C", label: "Comunicação clara" },
    { main: "T", label: "Trabalho em equipe" },
    { main: "P", label: "Pensamento crítico" },
    { main: "P", label: "Produtividade" },
    { main: "A", label: "Aprendizado contínuo" },
    { main: "G", label: "Gestão de tempo" },
  ];

  const hardSkills = [
    { main: "H", label: "HTML5" },
    { main: "C", label: "CSS3" },
    { main: "J", label: "JavaScript" },
    { main: "T", label: "TypeScript" },
    { main: "R", label: "React" },
    { main: "R", label: "React Native" },
    { main: "N", label: "Node.js" },
    { main: "G", label: "Git" },
    { main: "G", label: "GitHub" },
    { main: "P", label: "PostgreSQL" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-(--highlight)">
              Soft Skills 
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="min-w-50 sm:min-w-55 lg:min-w-60 flex justify-center grow md:grow-0"
              >
                <InfoCard main={skill.main} label={skill.label} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-(--highlight)">
              Hard Skills
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
            {hardSkills.map((skill, index) => (
              <div
                key={index}
                className="min-w-50 sm:min-w-55 lg:min-w-60 flex justify-center grow md:grow-0"
              >
                <InfoCard main={skill.main} label={skill.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
