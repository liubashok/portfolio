import Image from "next/image";

type Project = {
  width: number;
  height: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    width: 64,
    height: 68,
    title: "Лендинг яхт-клуба",
    description: "Лендинг, выполненный в рамках обучения вёрстке",
    image: "/landing-logo.svg",
    link: "https://liubashok.github.io/my-landing-project/",
  },
  {
    width: 100,
    height: 97,
    title: "Интернет-магазин косметики",
    description: "Тестовый проект для изучения React и Redux",
    image: "/makeup.png",
    link: "https://liubashok.github.io/makeup_products/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="absolute min-w-[350px] left-1/2 -translate-x-1/2 z-20">
      <h1 className="text-3xl font-bold mb-6">Проекты</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border flex z-20 rounded-lg gap-4 p-4 hover:shadow-lg transition"
          >
            <Image
              width={project.width}
              height={project.height}
              src={project.image}
              alt={project.title}
              className="rounded mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
