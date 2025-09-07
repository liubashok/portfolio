import Link from "next/link";
import { PropsWithChildren } from "react";
import { ThemeToggle } from "../ThemeToggle";
export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <header>
        <div className="flex justify-between mb-10 sm:mb-20">
          <nav className="flex flex-col sm:flex-row gap-1 min-w-60 mt-4 ml-4 sm:mx-auto font-light text-2xl sm:gap-20 dark:font-extralight tracking-wide sm:text-4xl justify-center">
            <Link
              className="z-20 dark:drop-shadow-none dark:hover:night-cloud hover:white-shadow"
              href="/"
            >
              Главная
            </Link>
            <Link
              className="z-20 dark:drop-shadow-none dark:hover:night-cloud hover:white-shadow"
              href="/about"
            >
              Обо мне
            </Link>
            <Link
              className="z-20 dark:drop-shadow-none dark:hover:night-cloud hover:white-shadow"
              href="/projects"
            >
              Проекты
            </Link>
            <Link
              className="z-20 dark:drop-shadow-none dark:hover:night-cloud hover:white-shadow"
              href="/contact"
            >
              Контакты
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="relative">{children}</main>
      <footer className="absolute pb-2 z-10 flex flex-row justify-center w-screen tracking-widest font-semibold text-sm text-center dark:text-rose-900 text-blue-400 -translate-x-1/2 left-1/2 bottom-0">
        <p className="pr-10">© 2025 Любовь Шохова</p>
        <a
          href="https://github.com/liubashok/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Портфолио на GitHub
        </a>
      </footer>
    </div>
  );
}
