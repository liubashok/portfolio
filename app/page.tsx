export default function HomePage() {
  return (
    <section className="left-1/2 -translate-x-1/2 min-w-80 z-20 text-gray-800 absolute">
      <div className="mx-auto text-center text-slate-900 dark:text-white p-6 ">
        <h1 className="text-6xl font-extralight mb-4">Привет, я Любовь</h1>
        <p className="text-2xl font-light text-slate-700 dark:text-slate-300">
          Фронтенд-разработчик, создаю сайты и интерфейсы на React / Next.js
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Скачать резюме
        </a>
      </div>
    </section>
  );
}
