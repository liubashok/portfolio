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
    <section className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Проекты</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-4 hover:shadow-lg transition"
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
