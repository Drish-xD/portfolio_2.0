'use client';

import { SectionHeader } from '@components';
import { projectsJson } from '@lib/data';
import { useCardsAnimation } from '@myhooks';

import Card from './Card';

export default function Projects() {
  const projectsRef = useCardsAnimation();

  return (
    <section className="global-section" id="projects">
      <SectionHeader text="Projects" num={2} />
      <div className="projects-container">
        <div className="half_container left">
          {projectsJson.left.map((project, index) => (
            <Card
              key={project.id}
              {...project}
              ref={(ref: HTMLDivElement) => (projectsRef.current[index] = ref)}
            />
          ))}
        </div>

        <div className="half_container right">
          {projectsJson.right.map((project, index) => (
            <Card
              key={project.id}
              {...project}
              ref={(ref: HTMLDivElement) =>
                (projectsRef.current[index + projectsJson.left.length] = ref)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
