import Image from "next/image";

type Project = {
  width: number;
  height: number;
  title: string;
  description: string;
  image: string;
  link: string;
  filter: string;
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
  },
  {
    width: 64,
    height: 64,
    title: "Интернет-магазин косметики",
    description: "Тестовый проект",
    image: "/pomada.svg",
    link: "https://liubashok.github.io/makeup_products/",
    filter: "filter-none",
  },
];

export default function ProjectsPage() {
  console.log(projects[0].filter);
  return (
    <section className="absolute min-w-[350px] left-1/2 -translate-x-1/2 z-20">
      <h1 className="text-3xl tracking-wider text-white font-light mb-6">
        Проекты
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
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
              <h2 className="text-xl tracking-wider text-white font-medium">
                {project.title}
              </h2>
              <p className="text-base font-normal text-white tracking-wider">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
