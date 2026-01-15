import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projects } from "./projects.data";
import { ProjectCard } from "@/components/ui/ProjectCard/ProjectCard";

export const Projects = () => {

  return (
    <section className="w-full bg-(--c-950) px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-(--highlight) text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            Projetos
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-10"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.title}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-(--c-800) text-(--neutral-light) border-(--c-400) hover:bg-(--c-600) hover:text-(--neutral-light) cursor-pointer" />
          <CarouselNext className="bg-(--c-800) text-(--neutral-light) border-(--c-400) hover:bg-(--c-600) hover:text-(--neutral-light) cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};
