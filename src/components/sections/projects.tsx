"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectImageSlideshow } from "./project-image-slideshow";

export function ProjectsSection() {
  const [activeSlides, setActiveSlides] = useState<
    Record<string, number>
  >({});

  return (
    <section
      className="section-shell section-shell--space"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="SELECTED WORK · DEMO PROJECTS"
            title="Recent Projects"
            description="A selection of digital experiences built with precision, creativity, and attention to detail."
          />
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => {
            const projectImages = project.images?.length
              ? project.images
              : [project.image];

            const activeIndex =
              activeSlides[project.name] ?? 0;

            const slideDetails =
              project.imageDetails?.[activeIndex];

            const title =
              slideDetails?.title ?? project.title;

            const category =
              slideDetails?.category ?? project.category;

            const description =
              slideDetails?.description ?? project.description;

            const technologies =
              slideDetails?.technologies ?? project.technologies;

            return (
              <Reveal
                key={project.name}
                delay={(index % 2) * 0.045}
              >
                <article className="project-card">
                  <div className="project-card__media">
                    <ProjectImageSlideshow
                      images={projectImages}
                      alt={project.imageAlt}
                      onSlideChange={(slideIndex) => {
                        setActiveSlides((previous) => {
                          if (
                            previous[project.name] === slideIndex
                          ) {
                            return previous;
                          }

                          return {
                            ...previous,
                            [project.name]: slideIndex,
                          };
                        });
                      }}
                    />
                  </div>

                  <div className="project-card__content">
                    <div className="project-card__meta-row">
                      <span className="project-card__category">
                        {category}
                      </span>

                      <span className="project-card__demo">
                        {project.name}
                      </span>
                    </div>

                    <div className="project-card__title-row">
                      <h3>{title}</h3>

                      {project.href ? (
                        <a
                          className="project-card__link"
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${title}`}
                        >
                          <ArrowUpRight
                            size={18}
                            aria-hidden="true"
                          />
                        </a>
                      ) : null}
                    </div>

                    <p>{description}</p>

                    <ul
                      className="tag-list"
                      aria-label={`${title} technologies`}
                    >
                      {technologies.map((technology) => (
                        <li key={technology}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
