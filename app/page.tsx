export default function HomePage() {
  return (
    <section className="left-1/2 -translate-x-1/2 min-w-80 z-20 text-gray-800 absolute">
      <div className="mx-auto text-center text-white dark:text-white p-6 ">
        <h1 className="text-6xl dark:font-extralight font-light mb-4">
          Привет, я Любовь
        </h1>
        <p className="text-2xl dark:font-light font-medium text-slate-300 dark:text-slate-300">
          Фронтенд-разработчик, создаю сайты и интерфейсы на React / Next.js
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block tracking-wider font-medium text-xl mt-6 px-4 py-2 dark:bg-rose-950 bg-blue-400 dark:text-rose-200 dark:hover:text-white text-blue-950 hover:text-indigo-800 hover:bg-blue-200 rounded-full dark:hover:bg-rose-800 transition"
        >
          Скачать резюме
        </a>
      </div>
    </section>
  );
}
