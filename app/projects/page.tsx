type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Сайт йога-студии",
    description: "Лендинг со встроенной формой бронирования",
    image: "#",
    link: "#",
  },
  {
    title: "Интернет-магазин товаров для животных",
    description: "Полностью адаптивный магазин с корзиной",
    image: "#",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="absolute left-1/2 -translate-x-1/2 ">
      <h1 className="text-3xl font-bold mb-6">Проекты</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border z-20 rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
