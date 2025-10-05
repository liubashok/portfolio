"use client";

import Image from "next/image";
import { useRef } from "react";
import { ScrollButton } from "../components/ScrollButton";

type Project = {
  width: number;
  height: number;
  title: string;
  description: string;
  image: string;
  link: string;
  filter: string;
  repository: string;
};

const projects: Project[] = [
  {
    width: 64,
    height: 68,
    title: "Лендинг яхт-клуба",
    description: "Лендинг, выполненный в рамках обучения вёрстке",
    image: "/landing-logo.svg",
    link: "https://liubashok.github.io/my-landing-project/",
    filter: "brightness-0 invert",
    repository: "https://github.com/liubashok/my-landing-project",
  },
  {
    width: 64,
    height: 64,
    title: "Интернет-магазин косметики",
    description: "Тестовый проект",
    image: "/pomada.svg",
    link: "https://liubashok.github.io/makeup_products/",
    filter: "filter-none",
    repository: "https://github.com/liubashok/makeup_products",
  },
  {
    width: 64,
    height: 64,
    title: "Лендинг загородного дома",
    description: "Лендинг, созданный для продажи дома",
    image: "/avatar.png",
    link: "https://liubashok.github.io/house-landing/",
    filter: "filter-none",
    repository: "https://liubashok.github.io/house-landing/",
  },
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="absolute min-w-[350px] left-1/2 -translate-x-1/2 z-20">
      <h1 className="text-3xl tracking-wider text-white font-light mb-6">
        Проекты
      </h1>
      <div
        className="flex flex-col scrollbar-hidden h-72 sm:h-72 overflow-y-auto gap-4"
        ref={containerRef}
      >
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-dotted dark:bg-black bg-[#075985] flex z-20 rounded-lg gap-4 p-4 hover:shadow-lg transition"
            >
              <Image
                width={project.width}
                height={project.height}
                src={project.image}
                alt={project.title}
                className={`rounded mb-4 ${project.filter}`}
              />
              <div>
                <h2 className="text-lg tracking-wider text-white font-semibold">
                  {project.title}
                </h2>
                <p className="text-sm font-normal text-blue-300 dark:text-rose-100 tracking-wider">
                  {project.description}
                </p>
              </div>
            </a>
            <a href={project.repository}>
              <p className="tracking-widest text-sm text-center font-semibold text-blue-950 dark:text-rose-900">
                Ссылка на репозиторий
              </p>
            </a>
          </div>
        ))}
      </div>
      <ScrollButton containerRef={containerRef} />
    </section>
  );
}
