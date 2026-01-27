import { InfoCard } from "@components/ui/InfoCard/InfoCard";
import {
  BiSolidConversation,
  BiSolidBrain,
  BiSolidRocket,
  BiSolidBookOpen,
  BiSolidTimeFive,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoGithub,
  BiLogoPostgresql,
} from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

export function Skills() {
  const softSkills = [
    { main: <BiSolidConversation />, label: "Comunicação clara" },
    { main: <HiUserGroup />, label: "Trabalho em equipe" },
    { main: <BiSolidBrain />, label: "Pensamento crítico" },
    { main: <BiSolidRocket />, label: "Proatividade" },
    { main: <BiSolidBookOpen />, label: "Aprendizado contínuo" },
    { main: <BiSolidTimeFive />, label: "Gestão de tempo" },
  ];

  const hardSkills = [
    { main: <BiLogoHtml5 />, label: "HTML5" },
    { main: <BiLogoCss3 />, label: "CSS3" },
    { main: <BiLogoTailwindCss />, label: "Tailwind CSS" },
    { main: <BiLogoJavascript />, label: "JavaScript" },
    { main: <BiLogoTypescript />, label: "TypeScript" },
    { main: <BiLogoReact />, label: "React" },
    { main: <BiLogoReact />, label: "React Native" },
    { main: <BiLogoNodejs />, label: "Node.js" },
    { main: <BiLogoGit />, label: "Git" },
    { main: <BiLogoGithub />, label: "GitHub" },
    { main: <BiLogoPostgresql />, label: "PostgreSQL" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="skills">
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
                className="min-w-40 sm:min-w-55 lg:min-w-60 flex justify-center md:grow-0"
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
