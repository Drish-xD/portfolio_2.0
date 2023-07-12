'use client';

import { useCardsAnime } from '@myhooks';
import { ProjectsProps } from '@types';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ project }: { project: ProjectsProps }) => {
  const projectsRef = useCardsAnime();
  const { name, tags, img, id, slug } = project;

  return (
    <article ref={(ref: HTMLDivElement) => (projectsRef.current[id] = ref)}>
      <Image
        src={img}
        alt={`Project ${name} Thumbnail`}
        title={`Project ${name} Thumbnail`}
        fill
        loading="lazy"
        sizes="(max-width: 425px) 75%, (max-width: 768px) 65%, 50%"
      />
      <span>
        <span />
      </span>
      <hgroup>
        <h3>
          {Array.from(name).map((letter: string, i: number) => (
            <span className="letter" key={i}>
              {letter}
            </span>
          ))}
        </h3>

        <div>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </hgroup>
      <Link href={`/project/${slug}`}>↗</Link>
    </article>
  );
};

export default Card;
