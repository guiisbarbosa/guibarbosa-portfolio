import { BiLogoGithub, BiWindowOpen } from "react-icons/bi";
import type { ProjectCardProps } from "./ProjectCard.types";
import { Button } from "@components/ui/Button/Button";

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  repositoryUrl,
  livePreviewUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-linear-to-b from-(--c-800)/30 to-(--c-800)/10 border border-(--c-600)/30 rounded-2xl overflow-hidden hover:border-(--c-600)/70 transition-colors duration-300">
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-(--c-400) mb-3">
          {title}
        </h3>

        <p className="text-(--neutral-light) text-base sm:text-lg leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-(--c-700)/50 text-(--c-300) px-3 py-1 rounded-full text-xs sm:text-sm border border-(--c-600)/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" size="md" asChild className="flex-1">
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
              Repositório
              <BiLogoGithub />
            </a>
          </Button>

          {livePreviewUrl && (
            <Button variant="secondary" size="md" asChild className="flex-1">
              <a
                href={livePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
                <BiWindowOpen />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
